import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private as:  AuthService,
    private routerControl: Router
  ){}


  canActivate(): Promise<boolean>{
   return new Promise( results => {
     this.as.getAuth().onAuthStateChanged(user => {
       if(user) this.routerControl.navigate(['footer']);
       results(!user ? true: false)
     })
   })
  }
  
}
