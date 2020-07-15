import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './components/tablero/tablero.component';


const routes: Routes = [
  { path: 'home', component: TableroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
