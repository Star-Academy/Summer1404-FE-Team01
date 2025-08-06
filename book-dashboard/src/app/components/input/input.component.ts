import {Component, input} from '@angular/core';
import {Input} from '../../models/input.model';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  flexDirection = input<string>("row");
  gap = input<string>("1")

  label = input<null | string>(null)
  id = input.required<string>();

  title = input<string>();
  placeHolder = input<string>();
  type = input<Input>("text")
}
