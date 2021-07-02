import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { InputMode } from 'src/app/models/input.model';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent {
  @Input() mode: InputMode;
  inputType = InputMode;
  buttonTypes = ButtonType;
  constructor() { }

  calculate() {
    console.log('calculating');
  }

}
