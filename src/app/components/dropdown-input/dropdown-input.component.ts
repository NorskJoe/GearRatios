import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})
export class DropdownInputComponent {
  @Input() options: any[];
  @Input() label: string;
  @Input() hint: string;
  showTip: boolean = false;

  constructor() { }

  public openTip() {
    this.showTip = !this.showTip;
  }

}
