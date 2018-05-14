import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {FeedPage} from "../feed/feed";
import {PesquisasPage} from "../pesquisas/pesquisas";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = PesquisasPage;

  constructor() {

  }
}
