import { Component, EventEmitter, input, output, Output } from '@angular/core';
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

  onDelete() {
    const bookId = this.book().id;
    if (bookId !== undefined) {
      console.log('send event from book card');
      this.onOpenDeleteDialog.emit(bookId);
    } else {
      // It's good practice to handle the case where the ID is missing.
      console.error('Cannot delete book: ID is missing.');
    }
  }

  onEdit() { }
}
