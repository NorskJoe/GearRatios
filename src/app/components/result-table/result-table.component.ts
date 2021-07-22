import { Component, Input, OnInit } from '@angular/core';
import { CalculationResult } from 'src/app/models/calculation.model';
import { ToRange } from 'src/app/utils/helper-functions';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {
  @Input() result: CalculationResult;
  numberOfCogs: number;
  toRange = ToRange;

  constructor() { }

  ngOnInit(): void {
    this.numberOfCogs = this.result.chainrings[0].cogs.length;
  }
}
