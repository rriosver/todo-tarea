import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea-page',
  templateUrl: './tarea-page.component.html',
  styleUrls: ['./tarea-page.component.css']
})
export class TareaPageComponent implements OnInit {
  tarea!: Tarea;
  constructor(private activatedRoute: ActivatedRoute, 
              private todoService: TodoService,
              private router: Router) {
      this.activatedRoute.params.pipe(
        mergeMap( params => this.todoService.obtenerTareax(parseInt(params['id'].toString())) )
      ).subscribe( tarea => this.tarea = tarea);
   }

  ngOnInit(): void {
  }

  actualizar(forma: FormGroup) {
    if(forma.valid) {
      this.todoService.actualizarTarea(this.tarea)
      .subscribe( () => {
        Swal.fire({
          title: 'Se actualizó la tarea',
          icon: 'success',
          allowOutsideClick: false,
          confirmButtonText: 'Regrese a la lista'
        }).then( () => this.router.navigateByUrl('/lista') )
      })
    } else {
        Swal.fire({
          title: 'El formulario es invalido',
          allowOutsideClick: false,
          confirmButtonText: 'Retornar',
          icon: 'error'
        })
    }
  }
}
