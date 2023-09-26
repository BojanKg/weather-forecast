import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTempComponent } from './time-temp.component';

describe('TimeTempComponent', () => {
  let component: TimeTempComponent;
  let fixture: ComponentFixture<TimeTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
