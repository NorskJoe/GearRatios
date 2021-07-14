import { Component } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { CustomCalculation } from 'src/app/models/calculation.model';
import { CHAINRING_SIZES, COG_SIZES } from 'src/app/utils/constants';

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

  constructor() { }

  public toRange(i: number): number[] {
    if (i) {
      return new Array(+i);
    } else {
        return new Array(0);
    }
  }

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
    console.log('number of chainrings: ', this.customCalculationValues.numberOfChainrings);
    console.log('sizes of chainrings: ', this.customCalculationValues.chainringSizes);
    console.log('min casette: ', this.customCalculationValues.minCasetteSpeed);
    console.log('max casette: ', this.customCalculationValues.maxCasetteSpeed);
  }

}
