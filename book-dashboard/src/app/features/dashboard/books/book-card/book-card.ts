import { Component, input } from '@angular/core';
import { BookCardModel } from '../../../../models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.html',
  standalone: false,
  styleUrl: './book-card.scss'
})
export class BookCard {
  book = input.required<BookCardModel>()

  onDelete(){}
  onEdit(){}
}
