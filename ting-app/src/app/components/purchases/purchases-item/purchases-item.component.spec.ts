import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesItemComponent } from './purchases-item.component';

describe('PurchasesItemComponent', () => {
  let component: PurchasesItemComponent;
  let fixture: ComponentFixture<PurchasesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
