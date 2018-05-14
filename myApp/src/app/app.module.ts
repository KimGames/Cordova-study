import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FeedPageModule} from "../pages/feed/feed.module";
import {IntroPageModule} from "../pages/intro/intro.module";
import {ResultadoPageModule} from "../pages/resultado/resultado.module";
import { ClimaProvider } from '../providers/clima/clima';
import {HttpModule} from "@angular/http";
import {NaoEncontradoPageModule} from "../pages/nao-encontrado/nao-encontrado.module";
import {PesquisasPageModule} from "../pages/pesquisas/pesquisas.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    ResultadoPageModule,
    HttpModule,
    NaoEncontradoPageModule,
    PesquisasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClimaProvider
  ]
})
export class AppModule {}
