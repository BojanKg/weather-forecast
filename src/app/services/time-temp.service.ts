import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { TimeTemp } from '../TimeTemp';

@Injectable({
  providedIn: 'root'
})
export class TimeTempService {
  city = 'Kragujevac';
  apiKey = '5d3531359844753d5ca886c63fe426b5';
  unit = 'metric';
  cnt = 40;
  timeWeather: TimeTemp[] = [];
  weatherTable = new EventEmitter<TimeTemp[]>();

  private apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&cnt=${this.cnt}&appid=${this.apiKey}&units=${this.unit}`;

  constructor(private http: HttpClient, private weatherService: WeatherService) { }

  setCity(city: string) {
    this.city = city;
    this.apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&cnt=${this.cnt}&appid=${this.apiKey}&units=${this.unit}`;
    this.getWeather().subscribe((weather) => {
      this.timeWeather = [...weather];
      console.log('TimeWeather: ', this.timeWeather);
      return this.timeWeather; 
    });
  }

  setUnit(unit: string) {
    this.unit = unit;
    this.apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&cnt=${this.cnt}&appid=${this.apiKey}&units=${this.unit}`;
    this.getWeather().subscribe((weather) => {
      this.timeWeather = weather;
    });
  }

  getDate(dateTime: string) {
    let newDate = new Date(dateTime);
    let dateFormat = new Intl.DateTimeFormat('sr-RS', { day: '2-digit', month: '2-digit', year: 'numeric' });
    let date = dateFormat.format(newDate);
    return date;
  }

  getTime(dateTime: string) {
    let newDate = new Date(dateTime);
    let timeFormat = new Intl.DateTimeFormat('sr-RS', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    let time = timeFormat.format(newDate);
    return time;
  }

  getWeather(): Observable<TimeTemp[]> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        const list = data.list;
        this.timeWeather = list.map((item: any) => ({
        temp: this.weatherService.getTemp(item.main.temp),
        min: this.weatherService.getTemp(item.main.temp_min),
        max: this.weatherService.getTemp(item.main.temp_max),
        humidity: this.weatherService.getTemp(item.main.humidity),
        wind: this.weatherService.getTemp(item.wind.speed),
        feels: this.weatherService.getTemp(item.main.feels_like),
        date: this.getDate(item.dt_txt),
        time: this.getTime(item.dt_txt),
        icon: item.weather[0].icon
        }));
        return this.timeWeather;
      })
    );
  }
}
