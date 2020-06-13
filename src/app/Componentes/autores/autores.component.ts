import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AutoresService } from 'src/app/Servicios/Autores.service';
import { Autor } from 'src/app/Models/Autor';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  constructor(public autorService: AutoresService) { }
  public autores: Autor[];
  public autorform: FormGroup;
  pageActual: number = 1;
  public cont: number = 1;

  ngOnInit() {
     this.autorform= new FormGroup({
      IdAutor: new FormControl('0'),
      Nombre: new FormControl(''),
      Apellido: new FormControl(''),
      // FechaNacimiento: new FormControl('')
    });
    this.consultarAutor();
  }
  consultarAutor(){
    this.autorService.getAutor()
    .subscribe((res:any) =>{
      this.autores = res;
    });
  }
  onSaveAutores(){
    if (this.autorform.valid) {
      const autorNew: Autor = this.autorform.getRawValue();
      // autorNew.FechaNacimiento = new Date();
      this.autorService.addAutor(autorNew);
    }
   }

   Editar(autorEditar: Autor){
      this.autorService.EditarAutor(autorEditar)
      .subscribe(res => this.autores);

   }
}




