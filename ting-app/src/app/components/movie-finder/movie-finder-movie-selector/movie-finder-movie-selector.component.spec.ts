import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderMovieSelectorComponent } from './movie-finder-movie-selector.component';

describe('MovieFinderMovieSelectorComponent', () => {
  let component: MovieFinderMovieSelectorComponent;
  let fixture: ComponentFixture<MovieFinderMovieSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFinderMovieSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFinderMovieSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
