import { Component } from '@angular/core';

@Component({
  selector: 'app-run-stop-button',
  standalone: true,
  imports: [],
  templateUrl: './run-stop-button.component.html',
  styleUrl: './run-stop-button.component.css'
})
export class RunStopButtonComponent {
  private isPlaying = false;
  label = 'Run';

  toggleMusic() {
    this.isPlaying = !this.isPlaying;
    this.label = this.isPlaying ? 'Stop' : 'Run';
  }

}
