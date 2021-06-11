import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  //Variavel que recebe o ID
  idRoute = null;
  receita = {};

  constructor(
    //Ferramenta para capturar o ID - ActivatedRoute
    private ar: ActivatedRoute,
    private firebase: FirebaseService,
    private toastControl: ToastController
    ) { }

  ngOnInit() {
    //Captura o ID na rota e passa para a variavel idRoute
    this.idRoute = this.ar.snapshot.params['id'];

    if(this.idRoute) {
      this.firebase.getReceita(this.idRoute).subscribe(carrinho => this.receita = carrinho );
    }
  }

  //Método do botão editar (submit)
  capForm(form){
    try {
      this.firebase.upReceita(this.idRoute, form.value);
      this.taostMessage('Dados Atualizados com sucesso', 3000, 'success');
    } catch (error) {
      this.taostMessage(error, 4000, 'danger');
    }
    
  }

  // Desafio - Configuara o toast para exibir menssagem de erro
  async taostMessage(message, duration, color){
    const toast = await this.toastControl.create({
      mode: 'ios',
      message,
      duration,
      color
    });
    toast.present();
  }
}
