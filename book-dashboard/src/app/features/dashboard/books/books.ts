import { Component, inject, OnInit, signal } from '@angular/core';

import { BookCardModel } from '../../../models/books.model';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrl: './books.scss',
  standalone: false
})

export class Books implements OnInit {

  private readonly bookService: BookService = inject(BookService)
  private _books = signal<BookCardModel[]>([])
  private selectedBookId: number | null = null;

  public isEditModalOpen: boolean = false;
  public isDeleteDialogOpen = false;


  public get books(): BookCardModel[] {
    return this._books()
  }

  public getSelectedId(): number | null {
    if (this.selectedBookId !== null) {
      return this.selectedBookId
    }
    return null
  }

  ngOnInit() {
    this._books.set(this.bookService.books);
  }

  public onOpenEditModal(bookId: number): void {
    this.isEditModalOpen = true
    this.selectedBookId = bookId
  }

  public onCloseEditModal(): void {
    this.isEditModalOpen = false;
    this._books.set(this.bookService.books);
  }


  public onOpenDeleteDialog(bookId: number): void {
    this.isDeleteDialogOpen = true;
    this.selectedBookId = bookId;
  }

  public onColoseDeleteDialog(): void {
    this.isDeleteDialogOpen = false;
  }

  public deleteBookHandler(): void {
    this.onColoseDeleteDialog();
    if (this.selectedBookId) {
      console.log("deleting book");
      this.bookService.deleteBookById(this.selectedBookId);
      this._books.set(this.bookService.books);
    }
  }

}
