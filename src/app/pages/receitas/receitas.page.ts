import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  titlePage = 'Pagina de Receitas';

  constructor(
    private loadingControl: LoadingController
  ) { }

  ngOnInit() {
    this.loadingMessage();
  }

  async loadingMessage(){
    let load = await this.loadingControl.create({
      mode: "ios",
      message: 'Carregando...',
      duration: 2000
    })
    await load.present();
  }

}
