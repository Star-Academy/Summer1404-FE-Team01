import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.html',
  standalone: false,
  styleUrl: './create-book.scss'
})
export class CreateBook {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private dashboardService: DashboardService, private router: Router) {
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

  onSubmit() {
    if (this.form.invalid) return;

    const formSnapShot = this.form;

    console.log(formSnapShot);
    this.dashboardService.addBook(formSnapShot.value);
    this.form.reset();
    this.router.navigateByUrl("/dashboard/books")
  }

}
