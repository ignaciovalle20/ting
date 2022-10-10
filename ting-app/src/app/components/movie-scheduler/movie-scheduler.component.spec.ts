import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSchedComponent } from './movie-scheduler.component';

describe('MovieListComponent', () => {
  let component: MovieSchedComponent;
  let fixture: ComponentFixture<MovieSchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
