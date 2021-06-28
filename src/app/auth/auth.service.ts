import { Component, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';



@Injectable({providedIn:'root'})
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) {}

  login() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.auth.signOut();
  }

  loginEmailPass() {
    return this.auth.signInWithEmailAndPassword("ketemartinsrufino@hotmail.com", "1020304050");
  }

}
