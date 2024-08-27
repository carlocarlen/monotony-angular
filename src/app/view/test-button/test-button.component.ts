import { Component } from '@angular/core';
import { GeneratorService } from '../../generator/generator.service';
import { MonotonyGeneratorService } from '../../music/monotony-generator.service';

@Component({
  selector: 'app-test-button',
  standalone: true,
  imports: [],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.css'
})
export class TestButtonComponent {
  result = '';

  constructor(
    private generatorService: GeneratorService,
    private monotony: MonotonyGeneratorService,
  ) {}

  runTest(): void {
    // this.result = this.generatorService.nextChar();
    this.result = this.monotony.nextNote();
    // this.result = 'you clicked me';
  }
}
