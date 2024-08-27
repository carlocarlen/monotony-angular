import { Component } from '@angular/core';
import { RunStopButtonComponent } from '../run-stop-button/run-stop-button.component';
import { SeedInputComponent } from '../seed-input/seed-input.component';
import { TestButtonComponent } from '../test-button/test-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ RunStopButtonComponent, SeedInputComponent, TestButtonComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
