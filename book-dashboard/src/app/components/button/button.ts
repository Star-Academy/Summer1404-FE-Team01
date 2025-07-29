import { Component, input, output } from '@angular/core';
import {ButtonBgColor, buttonType } from '../../models/button.model';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})

export class Button {
  isDisable = input<boolean>(false);
  text = input<string>('click');
  type = input<buttonType>("button");
  onClick = output<void>();
  bgColor= input<ButtonBgColor>('primary');
}
