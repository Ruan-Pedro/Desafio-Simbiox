import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TesteComponent } from './teste/teste.component';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ListaComponent,
    DetalhesComponent,
    TesteComponent,
  ],
  imports: [
    CommonModule,
    ListaRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class ListaModule { }
