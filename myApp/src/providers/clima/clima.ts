import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClimaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClimaProvider {

  private base_path = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
  private base_path2 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

  constructor(public http: Http) {
    console.log('Hello ClimaProvider Provider');
  }

  getCityWeather(nome_cidade, nome_estado){
    return this.http.get(this.base_path + nome_cidade +"%2C%20"+ nome_estado + this.base_path2);
  }
}
