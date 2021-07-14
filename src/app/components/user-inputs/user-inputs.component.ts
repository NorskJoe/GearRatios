import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { CustomCalculation, QuickCalculation } from 'src/app/models/calculation.model';
import { InputMode } from 'src/app/models/input.model';
import { CHAINRING_SIZES, COG_SIZES } from 'src/app/utils/constants';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent implements OnInit {
  @Input() mode: InputMode;
  inputType = InputMode;
  buttonTypes = ButtonType;
  cogSizes = COG_SIZES;
  quickCalculationValues: QuickCalculation = { };
  customCalculationValues: CustomCalculation = {
    chainringSizes: [],
    minCasetteSpeed: COG_SIZES.SMALLEST,
    maxCasetteSpeed: COG_SIZES.LARGEST,
  };

  value: number = 50;
  highValue: number = 150;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  constructor() { }

  ngOnInit(): void {
  }

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

  public quickCalculate() {
    console.log('rear cog: ', this.quickCalculationValues.rearCogSize);
    console.log('chainringSize: ', this.quickCalculationValues.chainringSize);
  }

  public customCalculate() {
    console.log('number of chainrings: ', this.customCalculationValues.numberOfChainrings);
    console.log('sizes of chainrings: ', this.customCalculationValues.chainringSizes);
    console.log('min casette: ', this.customCalculationValues.minCasetteSpeed);
    console.log('max casette: ', this.customCalculationValues.maxCasetteSpeed);
  }
}
