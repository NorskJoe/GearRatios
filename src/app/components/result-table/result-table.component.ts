import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.result);
    this.numberOfCogs = this.result.chainrings[0].cogs.length;
  }

  public getRowData(currentCog: number) {
    const header = `<th>${this.result.chainrings[0].cogs[currentCog].cogSize}</th>`
    const firstRing = `<td>${this.result.chainrings[0].cogs[currentCog].ratio}</td>`;
    const secondRing = this.result.chainrings.length >= 2
      ? `<td>${this.result.chainrings[1].cogs[currentCog].ratio}</td>`
      : '';
    const thirdRing = this.result.chainrings.length === 3
      ? `<td>${this.result.chainrings[2].cogs[currentCog].ratio}</td>`
      : '';

    return this.sanitizer.bypassSecurityTrustHtml(
      `${header} ${firstRing} ${secondRing} ${thirdRing}`
    );
  }
}
