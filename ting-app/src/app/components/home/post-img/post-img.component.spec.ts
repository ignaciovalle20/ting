import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieImgComponent } from './post-img.component';

describe('MovieImgComponent', () => {
  let component: MovieImgComponent;
  let fixture: ComponentFixture<MovieImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
