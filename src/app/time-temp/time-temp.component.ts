import { TimeTemp } from './../TimeTemp';
import { TimeTempService } from './../services/time-temp.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-time-temp',
  templateUrl: './time-temp.component.html',
  styleUrls: ['./time-temp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTempComponent implements OnInit {
  timeWeather!: TimeTemp[];
  
  constructor(private timeTemp: TimeTempService, private changeDetector: ChangeDetectorRef, public unitService: UnitService) {}
  
  ngOnInit() {
    this.getTimes();
  }

  getTimes() {
    this.timeTemp.getWeather().subscribe(weather => {
      this.timeWeather = [...weather];
      console.log(this.timeWeather);
      this.changeDetector.detectChanges();
    });
  }
}