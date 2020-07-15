import { TableroService } from './../../services/tablero.service';
import { Seccion } from './../../models/Seccion.class';
import { Tablero } from './../../models/Tablero.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  indexTablero = 0;
  // tablero: Tablero = new Tablero('prueba1');
  secciones: Seccion[];
  constructor(public ps: TableroService) {
    this.secciones = this.ps.getSecciones(this.indexTablero);
    this.ps.indexTablero = this.indexTablero;
  }

  ngOnInit(): void {
  }
  getNewSeccionChild(newSeccion: Seccion){
    this.secciones.push(newSeccion);
    // this.tablero.secciones = this.secciones;
  }
  getTablero(i: string){
    this.ps.indexTablero = Number(i);
    return this.ps.getSecciones(Number(i));
  }
}
