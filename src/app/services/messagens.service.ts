import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagensService {

  constructor(
    private alertControl: AlertController,
    private loadingControl: LoadingController
  ) { }

  //Alert Simples
  async alertMessageSimple(message, duration){
    let alert = await this.alertControl.create({
      mode: 'ios',
      message,
      buttons: [
        {
          text: 'ok',
        }
      ]
    });
    await alert.present();
  }

  //Loading
  async loadMessage(message, duration){
    let load = this.loadingControl.create({
      mode: 'ios',
      message,
      duration
    });

  await (await load).present
  }
}
