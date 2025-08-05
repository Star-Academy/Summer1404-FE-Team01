import { Component, input } from '@angular/core';
import { ButtonBgColor, buttonType } from '../../models/button.model';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})

export class Button {
  public isDisable = input<boolean>(false);
  public text = input<string>('click');
  public type = input<buttonType>("button");
  public bgColor = input<ButtonBgColor>('primary');
}
