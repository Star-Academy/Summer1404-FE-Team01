import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book-form.html',
  standalone: false,
  styleUrl: './create-book-form.scss'
})
export class CreateBookFrom implements OnInit {
  form!: FormGroup;

  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly dashboardService: BookService = inject(BookService)
  private readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Math.random(), Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
      publishData: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  public onSubmit() {
    if (this.form.invalid) return;

    const formSnapShot = this.form;

    this.dashboardService.addBook(formSnapShot.value);
    this.form.reset();
    this.router.navigateByUrl("/dashboard/books")
  }
}
