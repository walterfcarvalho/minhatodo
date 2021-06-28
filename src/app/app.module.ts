import { AuthModule } from './auth/auth.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaModule } from "./listas/listas.module";
@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    AppRoutingModule,
    AuthModule,
    ListaModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
