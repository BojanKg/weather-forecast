import { City } from './../City';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { UnitService } from '../services/unit.service';
import { CityService } from '../city.service';


@Component({
  selector: 'app-table-city',
  templateUrl: './table-city.component.html',
  styleUrls: ['./table-city.component.css']
})
export class TableCityComponent implements OnInit {
  cityes!: City[];

  constructor(private cityService: CityService, 
              public unitService: UnitService,
              private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.getCityes();
    this.cityService.getJsonCityes()
      .subscribe((city) => (console.log('CityOfJson',city)))
  }

  getCityes() {
    this.cityService.getCityes().then(data => {
      this.cityes = data;
      this.changeDetector.detectChanges();
    });
  }

  addCity(city: City) {
    this.cityService.addCity(city).subscribe((city) => (this.cityes.push(city)));
  }
}