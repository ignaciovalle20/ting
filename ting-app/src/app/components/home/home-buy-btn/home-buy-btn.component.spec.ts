import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBuyBtnComponent } from './home-buy-btn.component';

describe('HomeBuyBtnComponent', () => {
  let component: HomeBuyBtnComponent;
  let fixture: ComponentFixture<HomeBuyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBuyBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBuyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
