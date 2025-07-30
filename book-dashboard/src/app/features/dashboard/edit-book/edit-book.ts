import { Component, EventEmitter, inject, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { BookCardModel } from '../../../models/books.model';
import { Button } from "../../../components/button/button";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.html',
  standalone: true,
  imports: [FormsModule, Button],
  styleUrl: './edit-book.scss'
})
export class EditBookComponent implements OnChanges {
  @Input({ required: true }) bookId!: number | null;
  @Output() close = new EventEmitter<void>();

  private dashboardService = inject(DashboardService);

  enteredName: string = '';
  enteredImage: string = '';
  enteredGenre: string[] = [''];
  enteredAuthor: string = '';
  enteredPublishData: string = '';
  enteredPrice: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookId'] && this.bookId) {
      const book = this.dashboardService.getBookById(this.bookId);
      if (book) {
        this.enteredName = book.name;
        this.enteredImage = book.image;
        this.enteredGenre = book.genre;
        this.enteredAuthor = book.author;
        this.enteredPublishData = book.publishData;
        this.enteredPrice = book.price;
      }
    }
  }

  onSubmit() {
    const editedBook: BookCardModel = {
      id: this.bookId as number,
      name: this.enteredName,
      image: this.enteredImage,
      genre: this.enteredGenre,
      author: this.enteredAuthor,
      publishData: this.enteredPublishData,
      price: this.enteredPrice
    }

    console.log(editedBook)

    this.dashboardService.editBookById(editedBook)
    this.close.emit();
  }

  onCancle() {
    this.close.emit();
  }
}
