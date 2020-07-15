import { NombreSeccionComponent } from './../nombre-seccion/nombre-seccion.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nombre-tablero',
  templateUrl: './nombre-tablero.component.html',
  styles: [
  ]
})
export class NombreTableroComponent implements OnInit {
  forma: FormGroup;
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NombreSeccionComponent>,
  ) {
    this.forma = this.fb.group({
      nombre: ''
    });
  }

  ngOnInit(): void {
  }
  getValueNombre(){
    return this.forma.get('nombre').value;
  }
  onNoClick(): void{
    this.forma.reset();
    this.dialogRef.close();
  }

}
