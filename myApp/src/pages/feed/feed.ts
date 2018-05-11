import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultadoPage} from "../resultado/resultado";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  goToResultados(){

    this.navCtrl.push(ResultadoPage);

    // city = city || "Digite uma cdade";
    // state = state || "Selecione um estado";
    //
    // this.navCtrl.push(ClimaProvider, {
    //   cidade_digitada: city,
    //   estado_selecionado: state
    // });
  }
}
