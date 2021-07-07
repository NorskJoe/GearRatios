import { Component } from '@angular/core';
import { InputMode } from 'src/app/models/input.model';

@Component({
  selector: 'app-custom-calculator',
  templateUrl: './custom-calculator.component.html',
  styleUrls: ['./custom-calculator.component.scss']
})
export class CustomCalculatorComponent {
  inputMode = InputMode;
  constructor() { }

}
