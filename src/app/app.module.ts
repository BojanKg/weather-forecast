import { Routes , RouterModule } from '@angular/router';
import { TimeTempService } from './services/time-temp.service';
import { CityService } from './city.service';
import { WeatherService } from './services/weather.service';
import { UnitService } from './services/unit.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableCityComponent } from './table-city/table-city.component';

import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { MainTempComponent } from './main-temp/main-temp.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { TimeTempComponent } from './time-temp/time-temp.component';
import { TableDirective } from './table-city/table.directive';

const appRoutes: Routes = [
  { path: '', component: TableCityComponent },
  { path: 'timeTemp', component: TimeTempComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainTempComponent,
    TableCityComponent,
    TimeTempComponent,
    TableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    ToggleButtonModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [
    UnitService, 
    WeatherService, 
    CityService, 
    TableCityComponent, 
    TimeTempService,
    TimeTempComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
