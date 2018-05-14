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
    cidade: "Sem cidade",
    estado: "Sem Estado",
    pais: "Sem País",
    condicao: "Sem Condição",
    data: "Sem Data",
    temp_max: "Sem temperatura Máxima",
    temp_min: "Sem temperatura Mínima"
  }

<<<<<<< HEAD
<<<<<<< HEAD
  nome_cidade: string;
  nome_estado: string;
=======

>>>>>>> 2ac55d64b708e178931dc363403fa7525f4ca707
=======

>>>>>>> 2ac55d64b708e178931dc363403fa7525f4ca707

  constructor(public navCtrl: NavController, public navParams: NavParams, private climaProvider: ClimaProvider) {
    this.nome_cidade = navParams.get('cidade_digitada');
    this.nome_estado = navParams.get('estado_selecionado');
  }

  ionViewDidLoad() {
    this.climaProvider.getCityWeather(this.nome_cidade, this.nome_estado).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.previsao.display = objeto_retorno.query.results.channel.item.description.substring(19, 56);
        console.log(objeto_retorno.query.results.channel.item.description.substring(19, 56));
        this.previsao.cidade = objeto_retorno.query.results.channel.location.city;
        this.previsao.estado = objeto_retorno.query.results.channel.location.region;
        this.previsao.pais = objeto_retorno.query.results.channel.location.country;
        this.previsao.condicao = objeto_retorno.query.results.channel.item.forecast[0].text;
        this.previsao.data = objeto_retorno.query.results.channel.item.forecast[0].date;
        const max = ((parseFloat(objeto_retorno.query.results.channel.item.forecast[0].high) - 32) / 1.8).toPrecision(4);
        const min = ((parseFloat(objeto_retorno.query.results.channel.item.forecast[0].low) - 32) / 1.8).toPrecision(4);
        this.previsao.temp_max = String(max) + " ºC";
        this.previsao.temp_min = String(min) + " ºC";
      },
      error => {
        console.log(error);
      }
    )
  }
}
