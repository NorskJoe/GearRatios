import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCalculatorComponent } from './components/custom-calculator/custom-calculator.component';
import { QuickCalculatorComponent } from './components/quick-calculator/quick-calculator.component';

const routes: Routes = [
  { path: 'custom', component: CustomCalculatorComponent },
  { path: 'quick', component: QuickCalculatorComponent },
  { path: '', redirectTo: 'custom', pathMatch: 'full' },
  { path: '**', redirectTo: 'custom', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
