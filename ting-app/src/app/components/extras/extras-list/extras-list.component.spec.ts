import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasListComponent } from './extras-list.component';

describe('ExtrasListComponent', () => {
  let component: ExtrasListComponent;
  let fixture: ComponentFixture<ExtrasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
