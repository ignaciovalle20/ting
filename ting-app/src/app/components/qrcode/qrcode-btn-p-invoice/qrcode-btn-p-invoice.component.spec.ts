import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeBtnPInvoiceComponent } from './qrcode-btn-p-invoice.component';

describe('QrcodeBtnPInvoiceComponent', () => {
  let component: QrcodeBtnPInvoiceComponent;
  let fixture: ComponentFixture<QrcodeBtnPInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeBtnPInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeBtnPInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
