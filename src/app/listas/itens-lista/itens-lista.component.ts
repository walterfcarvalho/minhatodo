import { Itenslistas } from '../../interfaces/itens-listas';
import { Input } from "@angular/core";
import { Component } from "@angular/core";
import * as firebase from "firebase";


@Component({
  selector: "app-item-lista",
  templateUrl: "itens-lista.component.html"
})

export class ItensListaComponent {

@Input() nome : string = "";
@Input() itens: Map<string, boolean> = new Map();

constructor(
) {
console.log('xxxxx', this.itens);
}


}

