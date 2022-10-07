import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingPaymentComponent } from './processing-payment.component';

describe('ProcessingPaymentComponent', () => {
  let component: ProcessingPaymentComponent;
  let fixture: ComponentFixture<ProcessingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
