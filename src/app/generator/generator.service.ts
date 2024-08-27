import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private seed: string[] = ['1','2','3','4','5','1','2','3','4','5'];
  private currentBatch: string[] = this.seed.slice();
  private currentIndex = -1;
  private maxIndex = 10;

  constructor() { }

  setSeed(input5: string): void {
    if ( input5.length !== 5) {
      throw new Error('The input seed must be 5 characters long');
    }

    this.seed = (input5 + input5).split('');
    this.currentBatch = this.seed.slice();
  }

  // This is the magic algorithm 
  nextBatch(inputBatch: string[]): string[] {
    const everySecond = inputBatch.filter((_, index) => index %2 === 0);
    return everySecond.concat(everySecond);
  }

  nextChar(): string {
    this.currentIndex++;
    if (this.currentIndex === this.maxIndex) {
      this.currentBatch = this.nextBatch(this.currentBatch);
      this.currentIndex = 0;
    }
    return this.currentBatch[this.currentIndex];
  }
}
