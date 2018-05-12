import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClimaProvider} from "../../providers/clima/clima";

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
  providers: [
    ClimaProvider
  ]
})
export class ResultadoPage {

  previsao = {
    display: "s",
    cidade: "Uberlandia",
    estado: "MG",
    pais: "Brasil",
    condicao: "Sunny",
    data: "11 mai 2018",
    temp_max: "27,89",
    temp_min: "16,56"
  }



  constructor(public navCtrl: NavController, public navParams: NavParams, private climaProvider: ClimaProvider) {
  }

  ionViewDidLoad() {
    this.climaProvider.getCityWeather().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      }
    )
  }
}
