import {Component, effect, input, Input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {InputType} from '../../models/input.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  constructor() {
  }

  outputValue: OutputEmitterRef<string> = output<string>()

  flexDirection: InputSignal<string> = input<string>("row");
  gap: InputSignal<string> = input<string>("1")
  fontSize: InputSignal<string> = input<string>("1")

  label: InputSignal<null | string> = input<null | string>(null)
  inputId: InputSignal<string> = input.required<string>();

  title: InputSignal<string> = input<string>("");
  placeholder: InputSignal<string> = input<string>("");
  type: InputSignal<InputType> = input<InputType>("text");

  onHandleInputChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.outputValue.emit(value);
  }
}
