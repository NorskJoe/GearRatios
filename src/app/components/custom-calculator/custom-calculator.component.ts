import { Component } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { CalculationResult, CustomCalculation } from 'src/app/models/calculation.model';
import { CalculatorService } from 'src/app/services/calculator.service';
import { CHAINRING_SIZES, COG_SIZES } from 'src/app/utils/constants';
import { ToRange } from 'src/app/utils/helper-functions';

@Component({
  selector: 'app-custom-calculator',
  templateUrl: './custom-calculator.component.html',
  styleUrls: ['./custom-calculator.component.scss']
})
export class CustomCalculatorComponent {
  buttonTypes = ButtonType;
  cogSizes = COG_SIZES;
  customCalculationValues: CustomCalculation = {
    chainringSizes: [],
    minCasetteSpeed: COG_SIZES.SMALLEST,
    maxCasetteSpeed: COG_SIZES.LARGEST,
  };
  result: CalculationResult;
  toRange = ToRange;

  constructor(private calculatorService: CalculatorService) { }

  public getChainringLabel(current: number, total: number): string {
    let size = '';
    
    switch (current) {
      case CHAINRING_SIZES.SINGLE:
        if (total > CHAINRING_SIZES.SINGLE) {
          size = 'smallest';
        }
        break;
      case CHAINRING_SIZES.DOUBLE:
        if (total === CHAINRING_SIZES.DOUBLE) {
          size = 'largest';
        } else {
          size = 'middle';
        }
        break;
      case CHAINRING_SIZES.TRIPLE:
        size = 'largest';
        break;
    }

    return `No. of teeth on the ${size} chainring`;
  }

  public calculate() {
    this.result = this.calculatorService.calculateCustomRatios(this.customCalculationValues);
  }

}
