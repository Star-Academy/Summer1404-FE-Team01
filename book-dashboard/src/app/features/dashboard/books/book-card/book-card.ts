import { Component, input, output } from '@angular/core';
import { BookCardModel } from '../../../../models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.html',
  standalone: false,
  styleUrl: './book-card.scss'
})
export class BookCard {
  book = input.required<BookCardModel>();
  onOpenDeleteDialog = output<number>();
  isEditModalOpen: boolean = false;

  onDelete() {
    const bookId = this.book().id;
    if (bookId !== undefined) {
      console.log('send event from book card');
      this.onOpenDeleteDialog.emit(bookId);
    } else {
      console.error('Cannot delete book: ID is missing.');
    }
  }

  setIsOpen() {
    this.isEditModalOpen = true
  }

  setIsClose() {
    this.isEditModalOpen = false
  }
}
