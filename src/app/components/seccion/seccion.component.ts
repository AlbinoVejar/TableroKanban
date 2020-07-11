import { Seccion } from './../../models/Seccion.class';
import { NombreSeccionComponent } from './../../dialogs/nombre-seccion/nombre-seccion.component';
import { Tarea } from './../../models/Tarea.class';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialog: MatDialog
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
  guardarNuevaTarjeta(){
    this.active = null;
    const nuevaTarjeta = new Tarea(this.valueNombreTarea, this.valueDescripcionTarea);
    this.tarjetas.push(nuevaTarjeta);
    this.forma.reset();
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
}
