import { Tarea } from './../models/Tarea.class';
import { Tablero } from './../models/Tablero.class';
import { Injectable } from '@angular/core';
import { Seccion } from '../models/Seccion.class';

@Injectable({
  providedIn: 'root'
})
export class TableroService {
  public tableros: Tablero[] = [];
  public selectedTablero: Tablero;
  public indexTablero: number;
  constructor() {
    // this.tableros.push(new Tablero('prueba1'));
    this.getTableros();
    this.selectedTablero = this.tableros[0];
    this.indexTablero = 0;
  }
  guardarStorage(){
    const jsonData = JSON.stringify(this.tableros);
    localStorage.setItem('misTableros', jsonData);
  }
  getDataStorage(){
    if (localStorage.getItem('misTableros')){
      console.log(localStorage.getItem('misTableros'));
    }
  }
  getSecciones(indexTablero: number){
    return this.tableros[indexTablero].secciones;
  }
  crearTablero(nombre: string){
    this.tableros.push(new Tablero(nombre));
    this.guardarStorage();
  }
  crearSeccion(nombre: string){
    this.tableros[this.indexTablero].secciones.push(new Seccion(nombre));
    this.guardarStorage();
  }
  editarTablero(newNombre: string){
    this.tableros[this.indexTablero].nombre = newNombre;
    console.log(this.tableros);
    this.guardarStorage();
    this.getTableros();
  }
  borrarTablero(){
    this.tableros.splice(this.indexTablero, 1);
    this.guardarStorage();
    this.getTableros();
  }
  // getTableroSeleccionado(){
  //   return this.selectedTablero;
  // }
  getTableros(): Tablero[]{
    const data = localStorage.getItem('misTableros');
    if (data){
      this.tableros = JSON.parse(data);
      return this.tableros;
    }
  }
  // getTareas(seccion: Seccion): Tarea[]{
  //   return seccion.tareas;
  // }
}
