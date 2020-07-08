import { Tarea } from './../../models/Tarea.class';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @ViewChild('texto') fieldTexto: ElementRef;
  mostrarNuevaTarjeta = false;
  forma: FormGroup;
  tarjetas: Tarea[] = [];
  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      nombre: '',
      descripcion: ''
    });
   }

  ngOnInit(): void {
  }
  crearNuevaTarjeta(){
    this.mostrarNuevaTarjeta = true;
    setTimeout(() => this.fieldTexto.nativeElement.focus(), 100);
  }
  nuevaTarjeta(){
    this.mostrarNuevaTarjeta = false;
  }
  salirInput(){
    this.mostrarNuevaTarjeta = false;
  }
  guardarNuevaTarjeta(){
    this.mostrarNuevaTarjeta = false;
    const nuevaTarjeta = new Tarea(this.valueNombreTarea, this.valueDescripcionTarea);
    this.tarjetas.push(nuevaTarjeta);
    this.forma.reset();
  }
  get valueNombreTarea(){
    return this.forma.get('nombre').value;
  }
  get valueDescripcionTarea(){
    return this.forma.get('descripcion').value;
  }
}
