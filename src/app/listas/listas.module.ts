import { CoreModule } from './../core/core.module';

import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ItensListaComponent } from './itens-lista/itens-lista.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';



@NgModule({
  imports: [
    CoreModule,
    CommonModule
  ],
  declarations:[
    ListaTarefasComponent,
    ItensListaComponent
  ],

  exports: [
    ListaTarefasComponent
  ]

})

export class ListaModule {}
