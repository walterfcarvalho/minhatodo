import { Itenslistas } from './../../interfaces/itens-listas';
import { ItensListaComponent } from './../itens-lista/itens-lista.component';


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ListaTarefasServices } from './lista-tarefas.service';

@Component({
    selector: 'app-lista-tarefas',
    templateUrl: 'lista-tarefas.component.html',
    styleUrls: ['./lista-tarefas.component.css'],
})
export class ListaTarefasComponent implements OnInit {
  lista$ : Observable<any> | undefined;
  doc: any | undefined;


    constructor(
      private listaTarefasServices: ListaTarefasServices,


      ){
    }

    ngOnInit() {
       this.lista$ =  this.listaTarefasServices.getLista();
    }

    alert(id: string){
      console.log("alert", id)

      this.listaTarefasServices
      .getItensListas(id)
      .subscribe( (it ) => {
        this.doc = it;
        console.log(this.doc);
      }

      )



    }



}
