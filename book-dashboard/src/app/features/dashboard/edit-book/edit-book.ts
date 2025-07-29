import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "../../../components/button/button";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.html',
  standalone: true,
  imports: [
    FormsModule,
    Button
  ],
  styleUrl: './edit-book.scss'
})
export class EditBookComponent {
  @Input({ required: true }) bookId!: number | undefined
  @Output() close = new EventEmitter<void>()

  enteredName: number = 0
  enteredImage: string = ''
  enteredGenre: string = ''
  enteredAuthor: string = ''
  enteredPublishData: string = ''
  enteredPrice: string = ''

  onSubmit() {
    console.log("hello world")

    this.close.emit()
  }

  onCancle() {
    this.close.emit()
  }
}
