import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageInputComponent } from './login-page-input.component';

describe('LoginPageInputComponent', () => {
  let component: LoginPageInputComponent;
  let fixture: ComponentFixture<LoginPageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
