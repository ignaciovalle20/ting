import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasNextComponent } from './extras-next.component';

describe('ExtrasNextComponent', () => {
  let component: ExtrasNextComponent;
  let fixture: ComponentFixture<ExtrasNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
