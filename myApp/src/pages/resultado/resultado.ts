import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClimaProvider} from "../../providers/clima/clima";
import * as firebase from "firebase";

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
    display: "../../assets/imgs/Eclipse-1s-200px.svg",
    cidade: "Sem cidade",
    estado: "Sem Estado",
    pais: "Sem País",
    condicao: "Sem Condição",
    data: "Sem Data",
    temp_max: "Sem temperatura Máxima",
    temp_min: "Sem temperatura Mínima"
  }

  nome_cidade: string;
  nome_estado: string;

  database = firebase.database();

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

        let newPostKey = firebase.database().ref().child('previsoes').push().key;

        firebase.database().ref('previsoes/' + newPostKey).update({
          cidade: this.previsao.cidade,
          estado: this.previsao.estado,
          pais: this.previsao.pais,
          condicao: this.previsao.condicao,
          data: this.previsao.data,
          temp_max: this.previsao.temp_max,
          temp_min: this.previsao.temp_min
        });
      },
      error => {
        console.log(error);
      }
    )
  }
}
