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

  deleteBookById(bookId : string) : void{
    this._books.filter(book => book.id !== bookId);
  }


}
