import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";
import {PrevisaoItem} from "../../models/previsao-item.interface";

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

  public previsoes: Array<any> = [];
  public previsaoRef: firebase.database.Reference = firebase.database().ref('/previsoes');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.previsaoRef.on('value', itemSnapshot => {
      this.previsoes = [];
      itemSnapshot.forEach( itemSnap => {
        this.previsoes.push(itemSnap.val());
        return false;
      });
    });
  }
}
