import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderTheaterSelectorComponent } from './movie-finder-theater-selector.component';

describe('MovieFinderTheaterSelectorComponent', () => {
  let component: MovieFinderTheaterSelectorComponent;
  let fixture: ComponentFixture<MovieFinderTheaterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFinderTheaterSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFinderTheaterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
