import { Tarea } from './../../models/Tarea.class';
import { Proceso } from './../../models/Proceso.class';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @ViewChild('texto') proceso: ElementRef;
  nuevoProceso = false;
  forma: FormGroup;
  procesos: Proceso[] = [];
  tarea: Tarea;
  constructor(
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public info: any
  ){
    this.crearForm();
    this.tarea = info.tarea;
    console.log(this.tarea);
  }

  ngOnInit(): void {
  }
  crearForm(){
    this.forma = this.fb.group({
      descripcion: new FormControl('')
    });
  }
  crearNuevaTarea(){
    this.nuevoProceso = true;
    setTimeout(() => this.proceso.nativeElement.focus(), 100);
  }
  nuevaTarea(){
    // console.log(this.descripcionProcesoValue);
    const item: Proceso = new Proceso(this.descripcionProcesoValue);
    this.procesos.push(item);
    // setTimeout(() => {
    //   this.nuevoProceso = false;
    this.forma.reset();
    // }, 100);
  }
  get descripcionProcesoValue(){
    return this.forma.get('descripcion').value;
  }
  cambiarEstado(i: number){
    this.procesos[i].estado = !this.procesos[i].estado;
  }
  noMasTarea(){
    this.nuevoProceso = false;
  }
}
