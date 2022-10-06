import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizedImageComponent } from './full-sized-image.component';

describe('FullSizedImageComponent', () => {
  let component: FullSizedImageComponent;
  let fixture: ComponentFixture<FullSizedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSizedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSizedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
