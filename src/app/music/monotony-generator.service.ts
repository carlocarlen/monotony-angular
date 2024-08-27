import { Injectable } from '@angular/core';
import { GeneratorService } from '../generator/generator.service';

@Injectable({
  providedIn: 'root'
})
export class MonotonyGeneratorService {

  private dummyNote = 'C2';

  private charToNoteMapping: { [key: string]: string } = {
    '1': 'C2',
    '2': 'D2',
    '3': 'E2',
    '4': 'F2',
    '5': 'G2',
  };

  constructor(
    private generatorService: GeneratorService
  ) { }

  setCharToNoteMapping(mapping: ({[key: string]: string}) ): void {
    this.charToNoteMapping = mapping;
  }

  nextNote(): string {
    const nextChar = this.generatorService.nextChar();
    const nextNote = this.charToNoteMapping[nextChar];
    return nextNote;
  }

  dummyNextNote(): string {
    if (this.dummyNote === 'C2') {
      this.dummyNote = 'E2';
    } else {
      this.dummyNote = 'C2';
    }
    return this.dummyNote;
  }
  
}
