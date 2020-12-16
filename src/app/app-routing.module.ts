import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPageComponent } from './todo/pages/lista-page/lista-page.component';
import { TareaPageComponent } from './todo/pages/tarea-page/tarea-page.component';

const routes: Routes = [
  { path: 'home', component:  ListaPageComponent },
  { path: 'tarea/:id', component: TareaPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
