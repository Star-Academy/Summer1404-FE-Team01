import { Component } from "@angular/compiler";
import { Dashboard } from "./dashboard";
import { Routes } from "@angular/router";
import { Books } from "./books/books";
import { CreateBook } from "./create-book/create-book";


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
                component: CreateBook
            }
        ]
    },
]