import { Router, RouterModule } from '@angular/router';
import { UserService } from './../user/user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { User } from "../user/user";


@Component({
  templateUrl:"auth.component.html"
})

export class AuthComponent {


  constructor(
    private userService: UserService,
    private authService: AuthService,
    private afs: AngularFirestore,
    private route: Router
  ) {
  }

  logar() {

    this.authService.login().then(
      fbUsr =>{
        let usr = <User>{}
        usr.displayName = fbUsr.user?.displayName;
        usr.uid         = fbUsr.user?.uid;
        usr.email       = fbUsr.user?.email;
        usr.photoURL    = fbUsr.user?.photoURL;
        usr.emailVerified = fbUsr.user?.emailVerified;

        this.userService.setUser(usr);

        this.route.navigate(['tarefas']);
      },

    ).catch(
      err => {
        console.log(err);
      }
    );

  }

  logarEmailSenha() {

    this.authService.login().then(
      value =>{

          console.log (value.user?.uid);
      }
    )

  }

  logoff() {

    this.authService.logout();

  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }




}
