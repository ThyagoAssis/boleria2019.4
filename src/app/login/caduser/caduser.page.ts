import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MessagensService } from 'src/app/services/messagens.service';

@Component({
  selector: 'app-caduser',
  templateUrl: './caduser.page.html',
  styleUrls: ['./caduser.page.scss'],
})
export class CaduserPage implements OnInit {
  cadForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessagensService,
    private navControl: NavController
  ) { }

  ngOnInit() {
    this.validaForm()
  }

  private validaForm(){
    this.cadForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  cadUser(){
    try {
      this.authService.createUser(this.cadForm.value);
      this.messageService.loadMessage('Aguarde...', 2000 );
    } catch (error) {      
      this.messageService.toastMessage(error.message, 4000, 'danger');
    }finally{
      this.navControl.navigateRoot('/');
    }
  }
}
