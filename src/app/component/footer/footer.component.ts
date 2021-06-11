import { Component } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";

import { FirebaseService } from "src/app/services/firebase.service";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent {

    constructor(
        private alertControl: AlertController,
        private bd: FirebaseService,
        private toastControl: ToastController
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
                            this.toastMessage('Campos Obrigatórios!', 4000, 'danger');
                        } else {
                            try {
                                let receita = { imagen: form.img, title: form.title, ingredientes: form.ingredientes, preparo: form.preparo }
                                this.bd.addReceita(receita);
                                this.toastMessage('Dados Cadastrados com Sucesso', 2000, 'secondary');
                            } catch (error) {
                                this.toastMessage(error, 2000, 'danger');
                            }
                        }
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'Cancel',
                    handler: () => {
                        this.toastMessage('Cancelado', 2000, 'danger');
                    }
                }
            ]
        });

        await alert.present()
    }

    async toastMessage(message, duration, color) {
        const toast = await this.toastControl.create({
            mode: 'ios',
            message,
            duration,
            color
        })
        toast.present();
    }
}