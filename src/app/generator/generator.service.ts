import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private seed: string[] = ['1','2','3','4','5','1','2','3','4','5'];

  constructor() { }

  setSeed(input5: string): void {
    if ( input5.length !== 5) {
      throw new Error('The input seed must be 5 characters long');
    }

    this.seed = (input5 + input5).split('');
  }
}
