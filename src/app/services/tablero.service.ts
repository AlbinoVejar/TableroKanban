import { Tablero } from './../models/Tablero.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableroService {
  constructor() { }
  guardarStorage(user: Tablero){
    const jsonData = JSON.stringify(user);
    localStorage.setItem(user.nombre, jsonData);
  }
  getDataStorage(user: Tablero){
    if (localStorage.getItem(user.nombre)){
      console.log(localStorage.getItem(user.nombre));
    }
  }
}
