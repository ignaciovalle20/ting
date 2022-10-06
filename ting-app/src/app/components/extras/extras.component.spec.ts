import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasComponent } from './extras.component';

describe('ExtrasComponent', () => {
  let component: ExtrasComponent;
  let fixture: ComponentFixture<ExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
