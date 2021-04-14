import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEntranceComponentComponent } from './payment-entrance-component.component';

describe('PaymentEntranceComponentComponent', () => {
  let component: PaymentEntranceComponentComponent;
  let fixture: ComponentFixture<PaymentEntranceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEntranceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEntranceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
