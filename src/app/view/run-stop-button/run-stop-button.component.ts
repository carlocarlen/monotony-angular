import { Component } from '@angular/core';
import { ToneJsService } from '../../music/tone-js.service'

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

  constructor(private toneJsService: ToneJsService){}

  toggleMusic() {
    this.isPlaying = !this.isPlaying;
    this.label = this.isPlaying ? 'Stop' : 'Run';
    if (this.isPlaying) {
      this.toneJsService.play();
    }
  }

}
