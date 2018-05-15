import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultadoPage} from "../resultado/resultado";
import {NaoEncontradoPage} from "../nao-encontrado/nao-encontrado";

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

  city: string;
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  goToResultados(){

    if(this.city){
      this.navCtrl.push(ResultadoPage, {
        cidade_digitada: this.city,
        estado_selecionado: this.state
      });
    }
    else {
      this.navCtrl.push(NaoEncontradoPage);
    }
  }
}
