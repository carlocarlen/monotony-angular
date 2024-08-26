import { Injectable } from '@angular/core';
import * as Tone from "tone";

@Injectable({
  providedIn: 'root'
})
export class ToneJsService {

  constructor() { }

  play() {
    const synth = new Tone.Synth().toDestination();

    synth.triggerAttackRelease("C4", "8n");
  }
}
