import { NgModule } from "@angular/core";
import { Dashboard } from "./dashboard";
import { RouterModule, RouterOutlet } from "@angular/router";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";
import { Books } from "./books/books";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BookCard } from "./books/book-card/book-card";
import { BookService } from "./services/book/book.service";
import { routes } from "./dashboard.routing.module";
import { Button } from "../../components/button/button";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateBookFrom } from "./create-book-form/create-book-form";
import { Dialog } from "../../components/dialog/dialog";
import { EditBookComponent } from "./edit-book/edit-book";

@NgModule({
    declarations: [Dashboard, Books, BookCard, CreateBookFrom],
    imports: [RouterModule.forChild(routes),
        RouterOutlet, Header,
        Footer, Sidebar,
        CommonModule, Button,
        ReactiveFormsModule, Dialog, EditBookComponent],
    providers: [BookService]
})
export class DashboardModule { }
