import { Seccion } from './../../models/Seccion.class';
import { Tablero } from './../../models/Tablero.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  tablero: Tablero = new Tablero('prueba1');
  secciones: Seccion[] = [];
  constructor() {
    this.secciones.push(new Seccion('Planeación'));
    this.secciones.push(new Seccion('Desarrollo'));
    this.tablero.secciones = this.secciones;
    console.log(this.tablero);
   }

  ngOnInit(): void {
  }
  getNewSeccionChild(newSeccion: Seccion){
    console.log('dentro del padre Tablero');
    this.secciones.push(newSeccion);
    this.tablero.secciones = this.secciones;
    console.log(this.tablero);
  }
}
