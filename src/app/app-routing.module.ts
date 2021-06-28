import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { ListaTarefasComponent } from "./listas/lista-tarefas/lista-tarefas.component";


const rotas: Routes = [
  {
    path: 'tarefas',
    component: ListaTarefasComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    component: AuthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
