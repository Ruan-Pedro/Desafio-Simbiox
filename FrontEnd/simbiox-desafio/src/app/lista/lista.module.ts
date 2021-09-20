import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MatTableModule } from '@angular/material/table'  
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ListaComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    ListaRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class ListaModule { }
