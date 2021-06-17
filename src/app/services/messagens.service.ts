import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagensService {

  constructor(
    private alertControl: AlertController,
    private loadingControl: LoadingController,
    private toastControl: ToastController
  ) { }

  //Alert Simples
  async alertMessageSimple(header, duration){
    let alert = await this.alertControl.create({
      mode: 'ios',
      header,
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
    const load = await this.loadingControl.create({
      mode: 'ios',
      message,
      duration,
      translucent: true,
      //cssClass: 'custom-class custom-loading',
      //backdropDismiss: true
    });

  await load.present();
  }

  //Toast
  async toastMessage(message, duration, color){
    const toast = await this.toastControl.create({
      mode: 'ios',
      message,
      duration,
      color
    });
    toast.present();
  }
}
