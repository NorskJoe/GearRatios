import { Component, Input, OnInit } from '@angular/core';
import { Chainring } from 'src/app/models/calculation.model';

export interface RowData {
  header: number;
  firstRing: number;
  secondRing?: number;
  thirdRing?: number;
}

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() chainrings: Chainring[];
  @Input() currentCog: number;
  rowData: RowData;

  constructor() { }

  ngOnInit(): void {
    this.rowData = {
      header: this.chainrings[0].cogs[this.currentCog].cogSize,
      firstRing: this.chainrings[0].cogs[this.currentCog].ratio,
      secondRing: this.chainrings.length >= 2
         ? this.chainrings[1].cogs[this.currentCog].ratio
         : undefined,
      thirdRing: this.chainrings.length === 3
        ? this.chainrings[2].cogs[this.currentCog].ratio
        : undefined,
    };
  }
}
