import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  exports: [
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    DragDropModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    DragDropModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
