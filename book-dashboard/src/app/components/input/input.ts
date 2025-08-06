import { Component, input } from '@angular/core';
import { Input } from '../../models/input.model';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {

  id = input.required<string>;
  name = input<string>;
  placeHolder = input<string>;
  type = input.required<Input>()
}
