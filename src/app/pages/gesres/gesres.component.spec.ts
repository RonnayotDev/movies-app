import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesresComponent } from './gesres.component';

describe('GesresComponent', () => {
  let component: GesresComponent;
  let fixture: ComponentFixture<GesresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GesresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
