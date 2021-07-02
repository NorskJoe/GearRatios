import { Component } from '@angular/core';
import { InputMode } from 'src/app/models/input.model';

@Component({
  selector: 'app-quick-calculator',
  templateUrl: './quick-calculator.component.html',
  styleUrls: ['./quick-calculator.component.scss']
})
export class QuickCalculatorComponent {
  inputMode = InputMode;
  constructor() { }

}
