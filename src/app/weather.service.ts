import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { map } from 'rxjs/operators';

import { Weather } from './weather';

@Injectable()
export class WeatherService {
  private weather:Weather[] = [] ;
  weatherClass:Weather;
  location;
  constructor(private http:Http) { }

 

  otherWeather(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&q=${city}&units=imperial&cnt=10`).pipe(map((response:Response) => response.json()));
  }

  

}
