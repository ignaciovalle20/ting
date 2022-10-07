import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasItemComponent } from './extras-item.component';

describe('ExtrasItemComponent', () => {
  let component: ExtrasItemComponent;
  let fixture: ComponentFixture<ExtrasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
