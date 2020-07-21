import { Proceso } from './../models/Proceso.class';
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
  getTableros(): Tablero[]{
    const data = localStorage.getItem('misTableros');
    if (data){
      this.tableros = JSON.parse(data);
      return this.tableros;
    }
  }
  crearSeccion(nombre: string){
    this.tableros[this.indexTablero].secciones.push(new Seccion(nombre));
    this.guardarStorage();
  }
  editarSeccion(newNombre: string, indexSeccion: number){
    this.tableros[this.indexTablero].secciones[indexSeccion].nombre = newNombre;
    this.guardarStorage();
  }
  borrarSeccion(index: number){
    this.tableros[this.indexTablero].secciones.splice(index, 1);
    this.guardarStorage();
    this.getTableros();
  }
  crearTarjeta(nombre: string, indexSeccion: number, descrip?: string){
    this.tableros[this.indexTablero].secciones[indexSeccion].tareas.push(new Tarea(nombre, descrip));
    this.guardarStorage();
  }
  editarTarjeta(nombre: string, indexSeccion: number, indexTarjeta: number, descrip?: string){
    this.tableros[this.indexTablero].secciones[indexSeccion].tareas[indexTarjeta].nombre = nombre;
    this.tableros[this.indexTablero].secciones[indexSeccion].tareas[indexTarjeta].descripcion = descrip;
    this.guardarStorage();
  }
  borrarTarjeta(index: number, indexSeccion: number){
    this.tableros[this.indexTablero].secciones[indexSeccion].tareas.splice(index,1);
    this.guardarStorage();
    this.getTableros();
  }
  crearTarea(nombre: string, indexSeccion: number, indexTarjeta: number){
    this.tableros[this.indexTablero].secciones[indexSeccion].tareas[indexTarjeta].procesos.push(new Proceso(nombre));
    this.guardarStorage();
  }
  editarTarea(indexTarea: number , indexSeccion: number, indexTarjeta: number, nombre: string, estado?: boolean){
    if (nombre){
      this.tableros[this.indexTablero].secciones[indexSeccion].tareas[indexTarjeta].procesos[indexTarea].descripcion = nombre;
    }
    if (estado){
      this.tableros[this.indexTablero].secciones[indexSeccion].tareas[indexTarjeta].procesos[indexTarea].estado = estado;
    }
    this.guardarStorage();
  }
  borrarTarea(indexTarea: number , indexSeccion: number, indexTarjeta: number){
    this.tableros[this.indexTablero].secciones[indexSeccion].tareas[indexTarjeta].procesos.splice(indexTarea, 1);
    this.guardarStorage();
    this.getTableros();
  }
}
