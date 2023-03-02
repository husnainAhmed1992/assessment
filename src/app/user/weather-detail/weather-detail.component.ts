import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  public weatherDetails: any;
  public forecastToday: any;
  public circleTheme:any = { width: '100px', height: '100px', 'border-radius': '10px'};
  public lineTheme:any = { 'border-radius': '0', height: '15px', width: '300%' };
  constructor(
    private weatherService : WeatherService
  ) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(resp => {
      this.getWeatherForecast(resp.coords);
    },
    err => {
      console.log(err);
    });
  }

  getWeatherForecast(coords : any) {
    this.weatherService.getWeatherForecast(coords).subscribe({
      next:(res: any)=>{
        this.forecastToday = res?.forecast?.forecastday[0];
        this.weatherDetails = res;
      },
      error:(error)=>{
       console.log(error);
      }
    })
  }

}
