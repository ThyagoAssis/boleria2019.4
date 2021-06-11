import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Users } from '../interfcaes/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  signIn(login: Users){
    return this.angularFireAuth.signInWithEmailAndPassword(login.email, login.password);
  }

  createUser(user: Users){
    return this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  getAuth(){
    return this.angularFireAuth;
  }

  userLogout(){
    return this.angularFireAuth.signOut();
  }
}
