import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  //tareas: Observable <Tarea[]> = new Observable<Tarea[]> ();
  tareas$ = new Observable<Tarea[]>();
  tareas: Tarea[] = [];
  constructor(private todoService: TodoService) { 
    this.obtenerTareas();
  }

  ngOnInit(): void {
  }

  obtenerTareas() {
    this.tareas$ = this.todoService.obtenerTarea();
    this.tareas$.subscribe(tareas => this.tareas = tareas,
      err => alert('no se pudieron obtener las tareas'));
  }

  eliminarTarea(tareaId: number) {
    this.todoService.eliminarTarea(tareaId)
    .subscribe( res => {
      console.log({res});
      this.obtenerTareas();
    });
  }

  actualizarTarea(tarea: Tarea) {
    this.todoService.actualizarTarea(tarea)
    .subscribe( res => {
      console.log('Se actualizo la tarea');
    })
  }

}
