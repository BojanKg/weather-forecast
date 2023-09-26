import { Weather } from './../Weather';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  city = 'Kragujevac';
  apiKey = '5d3531359844753d5ca886c63fe426b5';
  unit = 'metric';
  //weather = new Weather();
  weather: Weather = {};

  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.unit}`;

  constructor(private http: HttpClient) { }

  setCity(city: string) {
    this.city = city;
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.unit}`;
    this.getWeather().subscribe((weather) => {
      this.weather = weather;
    });
  }

  setUnit(unit: string) {
    this.unit = unit;
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.unit}`;
    this.getWeather().subscribe((weather) => {
      this.weather = weather;
    });
  }

  getTemp(data: any) {
    let temp: number = data;
    return data = Math.round(temp);
  }

  getTime(data: any) {
    let date = new Date(data * 1000);
    let dan = date.getDate().toString().padStart(2, '0');
    let mesec = (date.getMonth() + 1).toString().padStart(2, '0');
    let godina = date.getFullYear();
    let formatiranDatum = dan + '.' + mesec + '.' + godina;
    return formatiranDatum;
  }

  getWeather(): Observable<Weather> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        this.weather.city = data.name;
        this.weather.temp = this.getTemp(data.main.temp);
        this.weather.min = this.getTemp(data.main.temp_min);
        this.weather.max = this.getTemp(data.main.temp_max);
        this.weather.humidity = this.getTemp(data.main.humidity);
        this.weather.wind = this.getTemp(data.wind.speed);
        this.weather.feels = this.getTemp(data.main.feels_like);
        this.weather.time = this.getTime(data.dt);
        this.weather.icon = data.weather[0].icon;
        return this.weather;
      })
    );
  }
}
