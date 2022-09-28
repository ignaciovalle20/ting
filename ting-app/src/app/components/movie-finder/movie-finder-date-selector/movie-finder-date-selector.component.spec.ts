import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderDateSelectorComponent } from './movie-finder-date-selector.component';

describe('MovieFinderDateSelectorComponent', () => {
  let component: MovieFinderDateSelectorComponent;
  let fixture: ComponentFixture<MovieFinderDateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFinderDateSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFinderDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
