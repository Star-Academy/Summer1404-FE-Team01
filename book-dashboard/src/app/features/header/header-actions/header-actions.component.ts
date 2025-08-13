import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../components/input/input.component';
import { BookService } from '../../dashboard/services/book/book.service';


@Component({
  selector: 'app-header-actions',
  imports: [InputComponent],
  standalone: true,
  templateUrl: './header-actions.component.html',
  styleUrl: './header-actions.component.scss'
})
export class HeaderActionsComponent {
  private readonly bookService: BookService = inject(BookService)

  filterBooksByTitle(title: string): void {
    const filteredBooks = this.bookService.booksData.filter(book => book.name.toLowerCase().startsWith(title.toLowerCase()))
    this.bookService.books$.next(filteredBooks);
  }
}
