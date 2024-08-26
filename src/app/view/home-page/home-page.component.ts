import { Component } from '@angular/core';
import { RunStopButtonComponent } from '../run-stop-button/run-stop-button.component';
import { SeedInputComponent } from '../seed-input/seed-input.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ RunStopButtonComponent, SeedInputComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
