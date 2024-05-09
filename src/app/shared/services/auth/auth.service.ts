import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithCustomToken } from '@angular/fire/auth';
import { AuthData } from '../../interfaces/auth-data';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { LoginData, loginDataInit } from '../../interfaces/login-data';
import { LsService } from '../ls/ls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  private ls = inject(LsService);

  private loggedEmail = signal<string | null>(this.ls.getEmail());

  async register(authData: AuthData) {
    const {email, password} = authData;
    return createUserWithEmailAndPassword(this.auth, email, password).then((res)=>{
      if( (res.user.email !== null) ){
        this.userWasLogged(res.user);
      }
    });
  }

  async login(authData: AuthData) {
    const {email, password} = authData;
    return signInWithEmailAndPassword(this.auth, email, password).then((res) => {
      if( (res.user.email !== null) ){
        this.userWasLogged(res.user);
      }
    });
  }


  userWasLogged(user: any){
    const email = user.email;
    this.loggedEmail.set(email);
    this.ls.setEmail(email);
    const loginData = loginDataInit;
    loginData.usuario = email;
    loginData.fechaInicio = new Date();
    this.registerLogin(loginData);
  }

  registerLogin(loginData: LoginData) {
    const loginsCollection = collection(this.firestore, 'logins');
    addDoc(loginsCollection, loginData).then((r)=>{
    }).catch((e)=>{
    });
  }

  CloseSession(){
    signOut(this.auth).then(() => {
      this.loggedEmail.set(null);
      this.ls.setEmail(null);
    })
  }

  public get user () { return this.loggedEmail(); }
}
