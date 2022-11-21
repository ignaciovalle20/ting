import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeBtnComponent } from './qrcode-btn.component';

describe('QrcodeBtnComponent', () => {
  let component: QrcodeBtnComponent;
  let fixture: ComponentFixture<QrcodeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
