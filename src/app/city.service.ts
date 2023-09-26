import { WeatherService } from './services/weather.service';
import { City } from './City';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city = 'Kragujevac';
  apiKey = '5d3531359844753d5ca886c63fe426b5';
  unit = 'metric';
  tableWeather: City = {};
  cityTabe = new EventEmitter<City[]>();

  private apiUrl = ``;
  private json = 'http://localhost:5000/data';

  constructor(private http: HttpClient, private weatherService: WeatherService) { }

  getCityes() {
    return this.http.get<any>('./assets/city.json')
        .toPromise()
        .then(res => <City[]>res.data)
        .then(data => 
          {
            for (let i = 0; i < data.length; i++) {
              this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data[i].name}&appid=${this.apiKey}&units=${this.unit}`;
              this.getCityesWeather().subscribe((city) => {
                data[i].temp = city.temp;
                data[i].weather = city.weather;
              });
            }
            console.log('NewCity: ',data);
            this.cityTabe.emit(data);
            return data; 
          });
  }

  getJsonCityes(): Observable<City[]> {
    return this.http.get<City[]>(this.json);
  }

  addCity(city: City) {
    // return this.http.post<City>('./assets/city.json', city, httpOptions);
    return this.http.post<City>(this.json, city, httpOptions);
  }

  setUnit(unit: string) {
    this.unit = unit;
    this.getCityes();
  }

  getCityesWeather(): Observable<City> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        this.tableWeather.temp = this.weatherService.getTemp(data.main.temp);
        this.tableWeather.weather = data.weather[0].icon;
        return this.tableWeather;
      })
    );
  }
}
