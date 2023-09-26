import { TimeTempComponent } from './../time-temp/time-temp.component';
import { UnitService } from './../services/unit.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CityService } from '../city.service';
import { TimeTempService } from '../services/time-temp.service';
import { City } from '../City';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onAddCity: EventEmitter<City> = new EventEmitter();
  city = '';
  unit = 'metric';
  unitShow = 'C';
  unitName = true;

  constructor(private weatherService: WeatherService, 
              private unitService: UnitService,
              private cityService: CityService,
              private timeTemp: TimeTempService,
              private timeComponent: TimeTempComponent) {}

  setCity() {
    const newCity = {
      name: this.city,
      temp: 0,
      weather: ''
    };
    this.cityService.addCity(newCity);
    this.onAddCity.emit(newCity);
    console.log('AddGrad', newCity);
  }

  getMainTemp() {
    this.setCity();
    this.weatherService.setCity(this.city);
    this.timeTemp.setCity(this.city);
    this.timeComponent.getTimes();
    this.city = '';
  }

  getUnit(unit: string) {
    this.weatherService.setUnit(unit);
    this.cityService.setUnit(unit);
    this.timeTemp.setUnit(unit);
    if(this.unit !== 'metric') {
      this.unitShow = 'F';
    } else {
      this.unitShow = 'C';
    }
    this.unitService.unitChange = this.unitShow;
    this.unitService.unitName = !this.unitName;
  }
}