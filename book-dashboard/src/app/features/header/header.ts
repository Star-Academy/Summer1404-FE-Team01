import {Component} from '@angular/core';
import {HeaderActionsComponent} from './header-actions/header-actions.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderActionsComponent,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  log(value: string) {
    console.log(value)
  }
}
