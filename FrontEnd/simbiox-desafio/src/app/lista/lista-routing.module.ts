import { ListaComponent } from './lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {
    path:'',
    component: ListaComponent
  },
  {
    path:'detalhes/:id',
    component:DetalhesComponent
  },
  {
    path:'teste',
    component:TesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
