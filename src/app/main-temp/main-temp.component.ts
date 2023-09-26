import { UnitService } from './../services/unit.service';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-temp',
  templateUrl: './main-temp.component.html',
  styleUrls: ['./main-temp.component.css']
})
export class MainTempComponent implements OnInit {
  weather: any;
  unitMetric = true;

  constructor(private weatherService: WeatherService, public unitService: UnitService) {}
  
  
  ngOnInit() {
    this.weatherService.getWeather().subscribe(weather => {
      this.weather = weather
    });
  }
}
