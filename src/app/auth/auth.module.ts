import { AuthComponent } from './auth.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations:[
    AuthComponent
  ],

  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}

