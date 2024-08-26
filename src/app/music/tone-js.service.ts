import { Injectable } from '@angular/core';
import * as Tone from "tone";

@Injectable({
  providedIn: 'root'
})
export class ToneJsService {

  private notes = ["C2", "E2", "G2", "E2"];
  private index = -1;
  private synth = new Tone.Synth().toDestination();
  private chordLoop = new Tone.Loop((time) => {
    this.synth.triggerAttackRelease(this.nextNote(), "4n");
  }, "4n").start(0);

  constructor() { }

  play() {
    const synth = new Tone.Synth().toDestination();

    synth.triggerAttackRelease("C4", "8n");
  }

  loopStart() {
    Tone.getTransport().start();
  }

  loopStop() {
    Tone.getTransport().stop();
  }

  private nextNote(): string {
    this.index++;
    if (this.index == this.notes.length) {
      this.index = 0;
    }
    return this.notes[this.index];
  }
}
