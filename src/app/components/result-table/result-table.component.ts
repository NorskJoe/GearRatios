import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CalculationResult } from 'src/app/models/calculation.model';
import { ToRange } from 'src/app/utils/helper-functions';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit, OnChanges {
  @Input() result: CalculationResult;
  numberOfCogs: number;
  toRange = ToRange;

  constructor() { }

  ngOnChanges(): void {
    this.load();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.numberOfCogs = this.result.chainrings[0].cogs.length;
  }
}
