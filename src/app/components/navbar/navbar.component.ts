import { TableroService } from './../../services/tablero.service';
import { NombreTableroComponent } from '../../dialogs/nombre-tablero/nombre-tablero.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Tablero } from './../../models/Tablero.class';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() iTableros: Tablero[];
  @Input() nombreTablero: string;
  @Output() indexTablero = new EventEmitter<string>();
  indice: number = 0;
  forma: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private ps: TableroService
  ) {
    this.indice = this.ps.indexTablero;
    this.forma = this.fb.group({
      iTablero: ''
    });
  }
  ngOnInit(): void {}

  get indexTableroSeleccionado(){
    return this.forma.get('iTablero').value;
  }
  onSelectTablero(){
    return this.indexTablero.emit(this.indexTableroSeleccionado);
  }
  // Acciones de botones del navbar
  crearNuevoTablero(){
    const dialogRef = this.dialog.open(NombreTableroComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.ps.crearTablero(result);
    });
  }
  editarTablero(index: number){}
  eliminarTablero(index: number){}
}
