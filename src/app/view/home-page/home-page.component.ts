import { Component } from '@angular/core';
import { RunStopButtonComponent } from '../run-stop-button/run-stop-button.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ RunStopButtonComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
