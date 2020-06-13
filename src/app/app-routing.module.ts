import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosComponent } from './Componentes/libros/libros.component';
import { AutoresComponent } from './Componentes/autores/autores.component';
import { CategoriasComponent } from './Componentes/categorias/categorias.component';



const routes: Routes = [
  {path: 'Autores', component: AutoresComponent},
  {path: 'Categorias', component: CategoriasComponent},
  {path: 'Libros', component: LibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
