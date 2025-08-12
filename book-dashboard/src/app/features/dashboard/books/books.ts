import { Component, inject, OnInit, signal } from '@angular/core';

import { BookCardModel } from '../../../models/books.model';
import { BookService } from '../services/book/book.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrl: './books.scss',
  standalone: false
})

export class Books {

  private readonly bookService: BookService = inject(BookService)
  private _books = toSignal(this.bookService.books$, { initialValue: this.bookService.books });
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

  public onOpenEditModal(bookId: number): void {
    this.isEditModalOpen = true
    this.selectedBookId = bookId
  }

  public onCloseEditModal(): void {
    this.isEditModalOpen = false;
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
    }
  }

}
