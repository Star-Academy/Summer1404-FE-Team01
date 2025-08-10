import {Dashboard} from "./dashboard";
import {Routes} from "@angular/router";
import {Books} from "./books/books";
import {CreateBookFrom} from "./create-book-form/create-book-form";
import {BookDetail} from './books/book-detail/book-detail';


export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books'
      },
      {
        path: 'books',
        component: Books,
        children: [
          {
            path: ':bookId',
            component: BookDetail,
          }
        ]
      },
      {
        path: 'create-book-form',
        component: CreateBookFrom
      }
    ]
  },
]
