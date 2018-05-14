import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PesquisasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisas',
  templateUrl: 'pesquisas.html',
})
export class PesquisasPage {

  pesquisas = {
    cidade: "Cidade do Banco",
    estado: "Estado do Banco",
    pais: "País do Banco",
    condicao: "Condição do Banco",
    data: "Data do Banco",
    temp_max: "Temperatura Máxima do Banco",
    temp_min: "Temperatura Mínima do Banco"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisasPage');
  }

}
