import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import {​​MatFormFieldModule}​​ from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaComponent } from './components/lista/lista.component'
import { MatListModule } from '@angular/material/list'
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import {​​MatButtonModule}​​ from '@angular/material/button';
import { TareaPageComponent } from './pages/tarea-page/tarea-page.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AddComponent, ListaPageComponent, ListaComponent, TareaPageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ​​MatButtonModule,
    RouterModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    ListaPageComponent
  ],
  providers: [TodoService]
})
export class TodoModule { }
