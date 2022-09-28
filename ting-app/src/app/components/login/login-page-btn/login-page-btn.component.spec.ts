import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageBtnComponent } from './login-page-btn.component';

describe('LoginPageBtnComponent', () => {
  let component: LoginPageBtnComponent;
  let fixture: ComponentFixture<LoginPageBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
