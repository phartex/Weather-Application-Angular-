import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeather } from '../interface/IWeather';

// const httpOptions = {
//   headers: new HttpHeaders()
//     .set(
//       environment.XRapidAPIHostHeaderName,
//       environment.XRapidAPIHostHeaderValue
//     )
//     .set(
//       environment.XRapidAPIKeyHeaderName,
//       environment.XRapidAPIKeyHeaderValue
//     ),
//     params: new HttpParams().set('q',cityName)
//   .set('units','metric')
//   .set('mode', 'json')
// };

// const params = {
//   params: new HttpParams().set('q',cityName)
//   .set('units','metric')
//   .set('mode', 'json')
// }

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string):Observable<IWeather> {
    const path = environment.weatherApiBaseUrl;
    return  this.http.get<IWeather>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(
        environment.XRapidAPIHostHeaderName,
        environment.XRapidAPIHostHeaderValue
      )
      .set(
              environment.XRapidAPIKeyHeaderName,
              environment.XRapidAPIKeyHeaderValue
        ),

        params: new HttpParams().set('q',cityName)
        .set('units','metric')
        .set('mode', 'json')
    });
  }
}

