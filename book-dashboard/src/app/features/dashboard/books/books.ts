import { Component, OnInit, signal } from '@angular/core';

import { BookCardModel } from '../../../models/books.model';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrl: './books.scss',
  standalone: false
})

export class Books implements OnInit {

  constructor(private bookService: DashboardService) { }

  books = signal<BookCardModel[]>([])

  isDeleteDialogOpen = false;
  selectedBookId: number | null = null;

  ngOnInit() {
    this.books.set(this.bookService.books);
  }

  onOpenDeleteDialog(bookId: number) {
    this.isDeleteDialogOpen = true;
    this.selectedBookId = bookId;
  }

  onColoseDeleteDialog(): void {
    this.isDeleteDialogOpen = false;
  }

  deleteBookHandler(): void {
    this.onColoseDeleteDialog();
    if (this.selectedBookId) {
      console.log("deleting book");
      this.bookService.deleteBookById(this.selectedBookId);
      this.books.set(this.bookService.books);
    }
  }

}
