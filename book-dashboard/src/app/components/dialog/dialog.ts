import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class Dialog {
  onCloseDialog = output<void>();
  callBack = input<() => void>();
  message = input<string>('Are you sure to delete this book ?');

  onDelete() {
    const fn = this.callBack();
    if (fn) fn();
  }

  onClose() {
    this.onCloseDialog.emit();
  }
}
