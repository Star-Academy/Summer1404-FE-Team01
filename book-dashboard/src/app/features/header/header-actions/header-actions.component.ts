import { Component} from '@angular/core';
import {InputComponent} from '../../../components/input/input.component';


@Component({
  selector: 'app-header-actions',
  imports: [InputComponent],
  standalone: true,
  templateUrl: './header-actions.component.html',
  styleUrl: './header-actions.component.scss'
})
export class HeaderActionsComponent {

}
