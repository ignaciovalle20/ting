import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBtnNextComponent } from './summary-btn-next.component';

describe('SummaryBtnNextComponent', () => {
  let component: SummaryBtnNextComponent;
  let fixture: ComponentFixture<SummaryBtnNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryBtnNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryBtnNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
