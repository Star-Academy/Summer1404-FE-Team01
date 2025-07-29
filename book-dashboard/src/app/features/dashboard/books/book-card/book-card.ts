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

  onDelete() {
    const bookId = this.book().id;
    if (bookId !== undefined) {
      this.onOpenDeleteDialog.emit(bookId);
    }
  }

  onEdit() { }
}
