import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nombre-seccion',
  templateUrl: './nombre-seccion.component.html',
  styleUrls: ['./nombre-seccion.component.css']
})
export class NombreSeccionComponent implements OnInit {
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
