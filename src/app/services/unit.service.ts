import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  public unitChange = 'C';
  public unitName = true;
  
  constructor() { }
}
