import { Tablero } from './../../models/Tablero.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() iTablero: Tablero;
  constructor() { }

  ngOnInit(): void {
  }

}
