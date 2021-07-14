import { Component } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { QuickCalculation } from 'src/app/models/calculation.model';

@Component({
  selector: 'app-quick-calculator',
  templateUrl: './quick-calculator.component.html',
  styleUrls: ['./quick-calculator.component.scss']
})
export class QuickCalculatorComponent {
  quickCalculationValues: QuickCalculation = {};
  buttonTypes = ButtonType;
  constructor() { }

  public calculate() {
    console.log('rear cog: ', this.quickCalculationValues.rearCogSize);
    console.log('chainringSize: ', this.quickCalculationValues.chainringSize);
  }

}
