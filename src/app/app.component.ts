import { Component, OnInit } from '@angular/core';
import { IWeather } from './interface/IWeather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData?: IWeather;
  cityName:string = 'yaba';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }

  onGetLocationDetails(){
     this.getWeatherData(this.cityName);
     this.cityName = '';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      }
    })
  }

}
