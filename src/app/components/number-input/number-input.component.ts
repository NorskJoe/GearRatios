import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  @Input() label: string;
  @Input() hint: string;
  showTip: boolean = false;

  constructor() { }

  public openTip() {
    this.showTip = !this.showTip;
  }
}
