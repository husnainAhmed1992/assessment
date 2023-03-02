import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {

  constructor(
    private http:HttpClient
  ) { }

  getCurrentLocation():Observable<any>{
    return this.http.get<any>('http://ipinfo.io')
  }


  getWeatherForecast(coords : any):Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.X_RAPID_API_KEY,
      'X-RapidAPI-Host':environment.X_RAPID_API_HOST
    });
    const requestOptions = { headers: headers };
    return this.http.get<any>(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${coords.latitude},${coords.longitude}`,requestOptions)
  }


}
