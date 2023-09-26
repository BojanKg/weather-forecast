import { CityService } from './city.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { City } from './City';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cityes!: City[];
  city: any;
  
  constructor(private primengConfig: PrimeNGConfig, private cityService: CityService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.cityService.getJsonCityes().subscribe((city) => (this.cityes = city));
  }

  onTableAdded(data: City[]) {
    this.cityes = data;
  }

  addCity(city: City) {
    this.cityService.addCity(city).subscribe((city) => (this.cityes.push(city)));
  }
 
}