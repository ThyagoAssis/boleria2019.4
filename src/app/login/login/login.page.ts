import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { MessagensService } from 'src/app/services/messagens.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  
  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessagensService,
  ) { }

  ngOnInit() {
    this.validaForm()
  }

  private validaForm(){
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  singIn(){
    try {
      this.authService.signIn(this.authForm.value);
      this.messageService.loadMessage('Aguarde...', 2000 );
    } catch (error) {      
      this.messageService.toastMessage(error.message, 4000, 'danger');
    }finally{
      
    }
  }

}
