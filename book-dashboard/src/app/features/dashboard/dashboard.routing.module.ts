import { Dashboard } from "./dashboard";
import { Routes } from "@angular/router";
import { Books } from "./books/books";
import { CreateBookFrom } from "./create-book-form/create-book-form";


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
                component: Books
            },
            {
                path: 'create-book-form',
                component: CreateBookFrom
            }
        ]
    },
]