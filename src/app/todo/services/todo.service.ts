import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoService {
  tareas : Tarea[] = [];
  constructor(private http: HttpClient) { 
    console.log('servicio todo iniciado');
  }

  agregarTarea(tarea: Tarea) {
    // this.tareas.push(tarea);
    // console.log(this.tareas);
    const url = environment.apiUrl + environment.endpoints.tareas;
    return this.http.post<Tarea>(url, tarea);
  }

  obtenerTarea() {
    const url =  environment.apiUrl + environment.endpoints.tareas;
    //console.log(url);
    return this.http.get<Tarea[]>(url);
    //return this.tareas;
  }

  obtenerTareax(tareaId: number) {

    const url =  `${environment.apiUrl}${environment.endpoints.tareas}`; 
    return this.http.get<Tarea[]>(url).pipe( 
      map ( (tareas: Tarea[]) => {
        for(const tarea of tareas) {
           if (tarea.id === tareaId)
           return tarea;
        }
      } ) 
    );
  }

  eliminarTarea(tareaId: number){
    const url =  `${environment.apiUrl}${environment.endpoints.tareas}/${tareaId}`;
    return this.http.delete(url);
  }

  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

  actualizarTarea(tarea: Tarea) {
    const url =  `${environment.apiUrl}${environment.endpoints.tareas}`;
    return this.http.put(`${url}/${tarea.id}`, tarea);
  }
}
