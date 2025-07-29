import { Injectable } from '@angular/core';
import { BookCardModel } from '../../../../models/books.model';
import booksData from '../../books/booksData';

@Injectable()
export class DashboardService {
  private _books: BookCardModel[] = [];

  constructor() {
    this._books = booksData;
  }

  get books() {
    return this._books
  }

  addBook(book: BookCardModel) {
    this._books.push(book)
  }

  deleteBookById(bookId: number): void {
    this._books.filter(book => book.id !== bookId);
  }

  editBookById(editedBook: BookCardModel): void {
    const index = this._books.findIndex(book => book.id === editedBook.id);
    if (index !== -1) {
      this._books[index] = editedBook;
    }
  }

}
