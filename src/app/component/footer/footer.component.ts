import { Component } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

import { FirebaseService } from "src/app/services/firebase.service";
import { MessagensService } from "src/app/services/messagens.service";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent {

    constructor(
        private alertControl: AlertController,
        private bd: FirebaseService,
        private messagensControl: MessagensService,
        private authService: AuthService
    ) { }

    async alertCad() {
        let alert = await this.alertControl.create({
            mode: 'ios',
            header: 'Cadastrar Receita',
            inputs: [
                { name: 'img', placeholder: 'http://imagem.com/imagem.png' },
                { name: 'title', placeholder: 'Título da receita' },
                { name: 'ingredientes', placeholder: 'Ingredientes' },
                { name: 'preparo', placeholder: 'Mode de Preparo' }
            ],
            buttons: [
                {
                    text: 'Cadastrar',
                    handler: (form) => {

                        //Validação dos campos input do Alert
                        if (form.img.trim() < 1 || form.title.trim() < 1 || form.ingredientes.trim() < 1  || form.preparo.trim() < 1) {
                            this.messagensControl.toastMessage('Campos Obrigatórios!', 4000, 'danger');
                        } else {
                            try {
                                let receita = { imagen: form.img, title: form.title, ingredientes: form.ingredientes, preparo: form.preparo }
                                this.bd.addReceita(receita);
                                this.messagensControl.toastMessage('Dados Cadastrados com Sucesso', 2000, 'secondary');
                            } catch (error) {
                                this.messagensControl.toastMessage(error, 2000, 'danger');
                            }
                        }
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'Cancel',
                    handler: () => {
                        this.messagensControl.toastMessage('Cancelado', 2000, 'danger');
                    }
                }
            ]
        });

        await alert.present()
    }

   
    logout(){
        try {
            this.authService.userLogout();
            this.messagensControl.loadMessage('Saindo..', 2000);
        } catch (error) {
            this.messagensControl.toastMessage(error, 4000, 'danger')
        }
    }
}