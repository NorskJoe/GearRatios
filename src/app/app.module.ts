import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomCalculatorComponent } from './components/custom-calculator/custom-calculator.component';
import { QuickCalculatorComponent } from './components/quick-calculator/quick-calculator.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CustomCalculatorComponent,
    QuickCalculatorComponent,
    NavButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
