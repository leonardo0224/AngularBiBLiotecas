import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* Componentes */
import { AppComponent } from './Componentes/app/app.component';
import { SidenavComponent } from './Componentes/sidenav/sidenav.component';
import { LibrosComponent } from './Componentes/libros/libros.component';
import { AutoresComponent } from './Componentes/autores/autores.component';
import { CategoriasComponent } from './Componentes/categorias/categorias.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Material Modulos*/
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoresService } from './Servicios/Autores.service';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LibrosComponent,
    AutoresComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AutoresService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
