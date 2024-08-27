import { Injectable } from '@angular/core';
import { GeneratorService } from '../generator/generator.service';

@Injectable({
  providedIn: 'root'
})
export class MonotonyGeneratorService {

  private charToNoteMapping: { [key: string]: string } = {
    '1': 'C3',
    '2': 'D3',
    '3': 'E3',
    '4': 'F3',
    '5': 'G3',
  };

  constructor(
    private generatorService: GeneratorService
  ) { }

  setCharToNoteMapping(mapping: ({[key: string]: string}) ): void {
    this.charToNoteMapping = mapping;
  }

  nextNote(): string {
    const nextChar = this.generatorService.nextChar();
    console.log('Playing ' + nextChar);
    const nextNote = this.charToNoteMapping[nextChar];
    console.log('Playing note ' + nextNote);
    return nextNote;
  }
}
