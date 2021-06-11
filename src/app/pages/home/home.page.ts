import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  titlePage = 'Página Principal';
  bookRecipes = [];

  constructor(
    private alertControl: AlertController,
    private toastControl: ToastController,
    private fireBase: FirebaseService
  ) { }

  ngOnInit() {
    this.fireBase.getAllReceita().subscribe(dados => { this.bookRecipes = dados })
  }

  //Método do alert
  async alertMessage(id) {
    let alert = await this.alertControl.create({
      mode: 'ios',
      message: 'Deseja relamente excluir?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            try{
              this.fireBase.delReceita(id);
              this.presentToast('Dados excluídos com sucesso', 'success');
            }catch(error){
              console.error(error);
            }           
          }
        },
        {
          text: 'Não',
          role: 'cancel',
          handler: () => { this.presentToast('Cancelado!', 'secondary') }

        }
      ]
    })
    await alert.present();
  }

  //Método Toast - Menssagem
  async presentToast(menssagem, cor) {
    const toast = await this.toastControl.create({
      mode: 'ios',
      message: menssagem,
      color: cor,
      duration: 2000
    });
    toast.present();
  }
  




}
