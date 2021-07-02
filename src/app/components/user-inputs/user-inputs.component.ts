import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { QuickCalculation } from 'src/app/models/calculation.model';
import { InputMode } from 'src/app/models/input.model';

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
  constructor() { }

  ngOnInit(): void {
    switch (this.mode) {
      case this.inputType.Quick:
        this.quickCalculationValues = {};
        break;
      case this.inputType.Custom:
        break;
    }
  }

  quickCalculate() {
    console.log('rear cog: ', this.quickCalculationValues.rearCogSize);
    console.log('chainringSize: ', this.quickCalculationValues.chainringSize);
  }

}
