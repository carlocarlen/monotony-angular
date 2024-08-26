import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomePageComponent } from './app/view/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent],
  template: `
    <app-home-page><\app-home-page>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
