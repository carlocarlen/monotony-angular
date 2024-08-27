import { Injectable } from '@angular/core';
import { GeneratorService } from '../generator/generator.service';

@Injectable({
  providedIn: 'root'
})
export class MonotonyGeneratorService {

  private charToNoteMapping: { [key: string]: string } = {
    '1': 'C',
    '2': 'D',
    '3': 'E',
    '4': 'F',
    '5': 'G',
  };

  constructor(
    private generatorService: GeneratorService
  ) { }

  setCharToNoteMapping(mapping: ({[key: string]: string}) ): void {
    this.charToNoteMapping = mapping;
  }

  nextNote(): string {
    const nextChar = this.generatorService.nextChar();
    return this.charToNoteMapping[nextChar];
  }
}
