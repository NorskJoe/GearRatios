import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent implements OnInit {
  @Input() maxRange: number;
  @Input() minRange: number;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() label: string;
  @Input() hint: string;
  @Output() minValueChange = new EventEmitter<number>();
  @Output() maxValueChange = new EventEmitter<number>();
  options: Options;
  showTip: boolean = false;

  constructor() { }

  
  ngOnInit(): void {
    this.options = {
      floor: this.minRange,
      ceil: this.maxRange,
    };
  }

  public updateValues() {
    this.minValueChange.emit(this.minValue);
    this.maxValueChange.emit(this.maxValue);
  }

  public openTip() {
    this.showTip = !this.showTip;
  }
}
