import { Component, Input } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { NavLink } from 'src/app/models/navigation.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonType: ButtonType;
  @Input() navItem: NavLink;
  @Input() buttonLabel: string;
  buttonTypes = ButtonType;

  constructor() { }

}
