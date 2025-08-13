import { Component, EventEmitter, inject, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book/book.service';
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

  private dashboardService = inject(BookService);

  enteredName = '';
  enteredImage = '';
  enteredGenre: string[] = [];
  enteredAuthor = '';
  enteredPublishData = '';
  enteredPrice = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookId'] && this.bookId !== null) {
      this.dashboardService.getBookById(this.bookId).subscribe({
        next: (book) => {
          this.initializeFormValues(book)
        }
      });
    }
  }

  private initializeFormValues(book: BookCardModel): void {
    this.enteredName = book.name;
    this.enteredImage = book.image;
    this.enteredGenre = Array.isArray(book.genre)
      ? book.genre
      : this.safeParseGenre(book.genre);
    this.enteredAuthor = book.author;
    this.enteredPublishData = book.publishData;
    this.enteredPrice = book.price;
  }

  private safeParseGenre(value: any): string[] {
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  }

  onSubmit() {
    if (this.bookId === null) return;

    const editedBook: BookCardModel = {
      id: this.bookId,
      name: this.enteredName,
      image: this.enteredImage,
      genre: this.enteredGenre,
      author: this.enteredAuthor,
      publishData: this.enteredPublishData,
      price: this.enteredPrice
    };

    this.dashboardService.replaceBook(this.bookId, editedBook)
      .subscribe({
        next: () => {
          this.close.emit();
        }
      });
  }

  onCancle() {
    this.close.emit();
  }
}
