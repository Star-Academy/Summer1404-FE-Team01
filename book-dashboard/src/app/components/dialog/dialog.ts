import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class Dialog {
  onCloseDianlog = output<void>();
  message = input<string>('are you sure to Delete this Book ?');

  onClose(){
    this.onCloseDianlog.emit();
  }

  onSubmit(){}
}
