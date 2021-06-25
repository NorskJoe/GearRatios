import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCalculatorComponent } from './custom-calculator.component';

describe('CustomCalculatorComponent', () => {
  let component: CustomCalculatorComponent;
  let fixture: ComponentFixture<CustomCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
