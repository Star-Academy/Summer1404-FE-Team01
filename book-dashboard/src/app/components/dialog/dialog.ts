import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class Dialog {
  public onCloseDialog = output<void>();
  public callBack = input<() => void>();
  public message = input<string>();

  public onDelete() {
    const fn = this.callBack();
    if (fn) fn();
  }

  public onClose() {
    this.onCloseDialog.emit();
  }
}
