import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NaoEncontradoPage } from './nao-encontrado';

@NgModule({
  declarations: [
    NaoEncontradoPage,
  ],
  imports: [
    IonicPageModule.forChild(NaoEncontradoPage),
  ],
})
export class NaoEncontradoPageModule {}
