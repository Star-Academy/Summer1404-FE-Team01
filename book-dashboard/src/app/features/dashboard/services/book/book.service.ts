import {Injectable} from '@angular/core';
import {BookCardModel} from '../../../../models/books.model';
import booksData from '../../books/booksData';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class BookService {
  private _books: BookCardModel[] = [];

  public books$: Subject<BookCardModel[]> = new Subject<BookCardModel[]>();

  constructor() {
    this._books = booksData;
  }

  get books() {
    return this._books
  }

  addBook(book: BookCardModel) {
    this._books.push(book);
    this.emitBooks();
  }

  deleteBookById(bookId: number): void {
    this._books = this._books.filter(book => book.id !== bookId);
    this.emitBooks();
  }

  editBookById(editedBook: BookCardModel): void {
    let index = this._books.findIndex(book => editedBook.id === book.id)
    if (index !== -1) {
      this._books[index] = editedBook
    }
    this.emitBooks();
  }

  getBookById(bookId: number): BookCardModel | undefined {
    return this._books.find(book => book.id === bookId);
  }

  emitBooks() : void{
    this.books$.next(this._books);
  }
}
