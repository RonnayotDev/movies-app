import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDedatilComponent } from './movie-dedatil.component';

describe('MovieDedatilComponent', () => {
  let component: MovieDedatilComponent;
  let fixture: ComponentFixture<MovieDedatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDedatilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDedatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
