import { TableroService } from './../../services/tablero.service';
import { Seccion } from './../../models/Seccion.class';
import { NombreSeccionComponent } from './../../dialogs/nombre-seccion/nombre-seccion.component';
import { Tarea } from './../../models/Tarea.class';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() iSecciones: Seccion[];
  @Output() nuevaSeccion = new EventEmitter<Seccion>();
  @ViewChild('texto') fieldTexto: ElementRef;
  active: number;
  forma: FormGroup;
  tarjetas: Tarea[] = [];
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private sv: TableroService
  ) {
    this.forma = this.fb.group({
      nombre: '',
      descripcion: ''
    });
  }

  ngOnInit(): void {
  }
  crearNuevaTarjeta(s: any){
    console.log(s);
    setTimeout(() => this.fieldTexto.nativeElement.focus(), 100);
  }
  nuevaTarjeta(){
    this.active = null;
  }
  salirInput(){
    this.active = null;
  }
  guardarNuevaTarjeta(index: number){
    this.active = null;
    const nuevaTarjeta = new Tarea(this.valueNombreTarea, this.valueDescripcionTarea);
    // this.iSecciones[index].tareas.push(nuevaTarjeta);
    // console.log(this.iSecciones[index].tareas);
    this.forma.reset();
  }
  get valueNombreTarea(){
    return this.forma.get('nombre').value;
  }
  get valueDescripcionTarea(){
    return this.forma.get('descripcion').value;
  }
  crearSeccion(nombre: string){
    const newSeccion = new Seccion(nombre);
    this.nuevaSeccion.emit(newSeccion);
  }
  pruebaDrop(event: CdkDragDrop<Tarea[]>){
    console.log(event);
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  agregarSeccion(){
    const dialogRef = this.dialog.open(NombreSeccionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        this.crearSeccion(result);
      }
    });
  }
  editarSeccion(){}
  borrarSeccion(){}
}
