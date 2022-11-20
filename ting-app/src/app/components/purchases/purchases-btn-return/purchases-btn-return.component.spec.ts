import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesBtnReturnComponent } from './purchases-btn-return.component';

describe('PurchasesBtnReturnComponent', () => {
  let component: PurchasesBtnReturnComponent;
  let fixture: ComponentFixture<PurchasesBtnReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesBtnReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesBtnReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
