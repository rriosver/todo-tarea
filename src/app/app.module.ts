import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { HttpClientModule } from '@angular/common/http';
import { TareaPageComponent } from './pages/tarea-page/tarea-page.component';
//import { RouterModule } from '@angular/router';
//import { APP_ROUTES } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    TareaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TodoModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
