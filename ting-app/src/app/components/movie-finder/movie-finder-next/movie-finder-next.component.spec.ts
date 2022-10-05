import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderNextComponent } from './movie-finder-next.component';

describe('MovieFinderNextComponent', () => {
  let component: MovieFinderNextComponent;
  let fixture: ComponentFixture<MovieFinderNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFinderNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFinderNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
