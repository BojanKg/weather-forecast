import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCityComponent } from './table-city.component';

describe('TableCityComponent', () => {
  let component: TableCityComponent;
  let fixture: ComponentFixture<TableCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
