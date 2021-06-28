import { UserService } from './../../user/user.service';
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/user/user";
import { Route } from "@angular/compiler/src/core";


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls:['header.component.css']
})

export class HeaderComponent {

  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) {
    this.user$ = userService.getUser();
  }


}
