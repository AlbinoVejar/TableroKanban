import { Tarea } from './../../models/Tarea.class';
import { TareaComponent } from './../../dialogs/tarea/tarea.component';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() inputTarjetas: Tarea[];
  // @Input() index: number;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
  abrirTarjeta(tarea: Tarea){
    const dialogRef = this.dialog.open(TareaComponent, {
      data: { tarea }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
