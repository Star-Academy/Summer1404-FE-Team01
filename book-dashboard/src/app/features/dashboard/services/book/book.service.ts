import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BookCardModel } from '../../../../models/books.model';

@Injectable()
export class BookService {
  private readonly _URL_ = 'http://localhost:5000/books';
  private _booksData: BookCardModel[] = [];
  private readonly _books$ = new BehaviorSubject<BookCardModel[]>([]);
  public readonly books$ = this._books$.asObservable();

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh(): void {
    this.http.get<BookCardModel[]>(this._URL_)
      .subscribe(books => {
        this._booksData = books;
        this._books$.next(books)
      });
  }

  get booksData(): BookCardModel[] {
    return this._books$.value;
  }

  getBookById(bookId: number): Observable<BookCardModel> {
    return this.http.get<BookCardModel>(`${this._URL_}/${bookId}`);
  }

  addBook(book: BookCardModel): Observable<BookCardModel> {
    return this.http.post<BookCardModel>(this._URL_, book)
      .pipe(tap(() => this.refresh()));
  }

  replaceBook(bookId: number, book: BookCardModel): Observable<BookCardModel> {
    return this.http.put<BookCardModel>(`${this._URL_}/${bookId}`, book)
      .pipe(tap(() => this.refresh()));
  }

  updateBookPartial(bookId: number, partialBook: Partial<BookCardModel>): Observable<BookCardModel> {
    return this.http.patch<BookCardModel>(`${this._URL_}/${bookId}`, partialBook)
      .pipe(tap(() => this.refresh()));
  }

  deleteBookById(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this._URL_}/${bookId}`)
      .pipe(tap(() => this.refresh()));
  }

  filterBooksByTitle(title: string): void {
    if (!title.trim()) {
      this._books$.next(this._booksData);
    }
    else {
      const filtered = this._booksData.filter(book =>
        book.name.toLowerCase().includes(title.toLowerCase())
      );
      this._books$.next(filtered);
    }
  }
}
