import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { CustomCalculation, QuickCalculation } from 'src/app/models/calculation.model';
import { InputMode } from 'src/app/models/input.model';
import { CHAINRING_SIZES } from 'src/app/utils/constants';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent implements OnInit {
  @Input() mode: InputMode;
  inputType = InputMode;
  buttonTypes = ButtonType;
  quickCalculationValues: QuickCalculation;
  customCalculationValues: CustomCalculation;
  constructor() { }

  ngOnInit(): void {
    switch (this.mode) {
      case this.inputType.QUICK:
        this.quickCalculationValues = {};
        break;
      case this.inputType.CUSTOM:
        this.customCalculationValues = {
          chainringSizes: [],
        };
        break;
    }
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
}
