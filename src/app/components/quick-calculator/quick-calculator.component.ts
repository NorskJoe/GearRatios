import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { CalculationResult, QuickCalculation } from 'src/app/models/calculation.model';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-quick-calculator',
  templateUrl: './quick-calculator.component.html',
  styleUrls: ['./quick-calculator.component.scss']
})
export class QuickCalculatorComponent {
  @Output() calculation = new EventEmitter<CalculationResult>();
  result: CalculationResult;
  quickCalculationValues: QuickCalculation = {
    chainringSize: 0,
    rearCogSize: 0
  };
  buttonTypes = ButtonType;


  constructor(private calculatorService: CalculatorService) { }

  public calculate() {
    this.result = this.calculatorService.calculateQuickRatios(this.quickCalculationValues);
  }

}
