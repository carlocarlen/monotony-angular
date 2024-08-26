import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seed-input',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './seed-input.component.html',
  styleUrl: './seed-input.component.css'
})
export class SeedInputComponent {

  inputString = '';
  validationMessage = '';

  validateInputString() {
    if (this.isValid(this.inputString)) {
      this.validationMessage = "Bravo! Let's start";
    }
  }

  private isValid(input: string): boolean {
    if (input.length !== 5) {
      this.validationMessage = 'input string must be 5 characters long';
      return false;
    }

    // Create a Set to track unique chars
    const uniqueChars = new Set();

    for (const char of input) {
      if ( char < '1' || char > '5') {
        this.validationMessage = 'input string must contain only numbers from 1 to 5';
        return false;
      }

      if (uniqueChars.has(char)) {
        this.validationMessage = 'input string cannot repeat chars';
        return false;
      }

      uniqueChars.add(char);
    }

    return true;
  }
}
