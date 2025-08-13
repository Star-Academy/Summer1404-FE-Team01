import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { BookCardModel } from '../../../../models/books.model';

@Injectable()
export class BookService {
  private _URL_ = 'http://localhost:5000/books';

  private _booksData: BookCardModel[] = [];
  public get booksData() {
    return this._booksData;
  }
  public books$ = new Subject<BookCardModel[]>();

  constructor(private http: HttpClient) { }

  fetchBooks(): void {
    this.http.get<BookCardModel[]>(this._URL_)
      .subscribe({
        next: (books) => {
          this._booksData = books;
          this.books$.next(books);
        },
        error: (err) => console.error(err)
      });
  }


  getBookById(bookId: number): Observable<BookCardModel> {
    return this.http.get<BookCardModel>(`${this._URL_}/${bookId}`);
  }

  addBook(book: BookCardModel): Observable<BookCardModel> {
    return this.http.post<BookCardModel>(this._URL_, book);
  }

  replaceBook(bookId: number, book: BookCardModel): Observable<BookCardModel> {
    return this.http.put<BookCardModel>(`${this._URL_}/${bookId}`, book);
  }

  updateBookPartial(bookId: number, partialBook: Partial<BookCardModel>): Observable<BookCardModel> {
    return this.http.patch<BookCardModel>(`${this._URL_}/${bookId}`, partialBook);
  }

  deleteBookById(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this._URL_}/${bookId}`);
  }
}
