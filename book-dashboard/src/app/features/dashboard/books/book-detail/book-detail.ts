import {Component, inject, OnInit, signal} from '@angular/core';
import {BookCard} from '../book-card/book-card';
import {BookCardModel} from '../../../../models/books.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../services/book/book.service';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss'
})
export class BookDetail implements OnInit {
  _book = signal<BookCardModel | undefined>(undefined);
  private bookId: string | null = null;
  private readonly bookService: BookService = inject(BookService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.bookId = this.getBookIdFromUrl();
    this.setBook(this.getBookInformation());
    if (this._book()) {
      return;
    } else {
      this.redirectToBooksPage();
    }
  }

  redirectToBooksPage(): void {
    this.router.navigate(['/dashboard', 'books']);
  }

  getBookIdFromUrl(): string | null {
    return this.activatedRoute.snapshot.paramMap.get("bookId");
  }

  getBookInformation(): BookCardModel | undefined {
    return this.bookService.getBookById(Number(this.bookId));
  }

  setBook(book: BookCardModel | undefined): void {
    this._book.set(book);
  }
}
