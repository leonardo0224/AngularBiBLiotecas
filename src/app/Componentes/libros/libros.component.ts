import { Component, OnInit, ViewChild, Inject  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  nombre: string;
  logo: string;
  cantEquipos: number;
  minJugadores: number;
  maxJugadores: number;
  ciudad: string;
}
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor() { }
  data: any;
  nombre: string;
  logo: string;
  cantEquipos: number;
  minJugadores: number;
  maxJugadores: number;
  ciudad: string;
  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = ['nombre', 'logo', 'estado', 'cantidad', 'minJugadores', 'maxJugadores', 'ciudad'];
  // tslint:disable-next-line: member-ordering
  dataSource = new MatTableDataSource<PeriodicElement> (ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  nombre: string;
  logo: string;
  estado: string;
  cantidad: number;
  minJugadores: number;
  maxJugadores: number;
  ciudad: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {logo: 'a', nombre: 'Torneo1', estado: 'Activo', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'b', nombre: 'Torneo2', estado: 'Activo', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'c', nombre: 'Torneo3', estado: 'Activo', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'd', nombre: 'Torneo4', estado: 'Termninado', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'e', nombre: 'Torneo5', estado: 'Terminado', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'f', nombre: 'Torneo6', estado: 'Activo', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'g', nombre: 'Torneo7', estado: 'Activo', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
  {logo: 'h', nombre: 'Torneo8', estado: 'Terminado', cantidad: 40 , minJugadores: 14, maxJugadores: 16, ciudad: 'Bogota'},
];

