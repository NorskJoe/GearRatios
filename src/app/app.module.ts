import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomCalculatorComponent } from './components/custom-calculator/custom-calculator.component';
import { QuickCalculatorComponent } from './components/quick-calculator/quick-calculator.component';
import { ButtonComponent } from './components/button/button.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { TipComponent } from './components/tip/tip.component';
import { FormsModule } from '@angular/forms';
import { DropdownInputComponent } from './components/dropdown-input/dropdown-input.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SliderInputComponent } from './components/slider-input/slider-input.component';
import { CalculatorService } from './services/calculator.service';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { TableRowComponent } from './components/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CustomCalculatorComponent,
    QuickCalculatorComponent,
    ButtonComponent,
    NumberInputComponent,
    TipComponent,
    DropdownInputComponent,
    SliderInputComponent,
    ResultTableComponent,
    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule,
  ],
  providers: [
    CalculatorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
