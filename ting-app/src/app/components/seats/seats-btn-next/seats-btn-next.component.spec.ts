import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsBtnNextComponent } from './seats-btn-next.component';

describe('SeatsBtnNextComponent', () => {
  let component: SeatsBtnNextComponent;
  let fixture: ComponentFixture<SeatsBtnNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsBtnNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsBtnNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
