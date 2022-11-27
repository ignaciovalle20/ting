import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeBtnTicketComponent } from './qrcode-btn-ticket.component';

describe('QrcodeBtnTicketComponent', () => {
  let component: QrcodeBtnTicketComponent;
  let fixture: ComponentFixture<QrcodeBtnTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeBtnTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeBtnTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
