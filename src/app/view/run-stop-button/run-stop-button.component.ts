import { Component, OnInit } from '@angular/core';
import { ToneJsService } from '../../music/tone-js.service';
import { MonotonyGeneratorService } from '../../music/monotony-generator.service';

@Component({
  selector: 'app-run-stop-button',
  standalone: true,
  imports: [],
  templateUrl: './run-stop-button.component.html',
  styleUrl: './run-stop-button.component.css'
})
export class RunStopButtonComponent implements OnInit {
  private isPlaying = false;
  label = 'Run';

  constructor(
    private toneJsService: ToneJsService,
    private monotony: MonotonyGeneratorService, 
  ){  }

  ngOnInit() {
    this.toneJsService.setNextNote(() => this.monotony.dummyFromGenerator());
  }

  toggleMusic() {
    this.isPlaying = !this.isPlaying;
    this.label = this.isPlaying ? 'Stop' : 'Run';
    if (this.isPlaying) {
      this.toneJsService.loopStart();
    } else {
      this.toneJsService.loopStop();
      
    }
  }

}
