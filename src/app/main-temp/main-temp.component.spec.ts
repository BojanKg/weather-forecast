import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTempComponent } from './main-temp.component';

describe('MainTempComponent', () => {
  let component: MainTempComponent;
  let fixture: ComponentFixture<MainTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
