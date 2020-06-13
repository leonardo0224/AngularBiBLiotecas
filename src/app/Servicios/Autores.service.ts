import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/observable";
import { Injectable } from '@angular/core';
import { Autor } from '../Models/Autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  public selectdAutor: Autor = {
    IdAutor: '0',
    Nombre: '',
    Apellido: '',
    // FechaNacimiento: new Date()
  };

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:58034/api/Autor';
  getAutor() {
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl);
  }
  
  addAutor(auto :Autor){
    return this.http.post(this.baseUrl, auto);
  }


  /* AgregarAutor(autor: Autor): Observable<Autor> {
    console.log(this.baseUrl + 'prueba', autor);
    return this.http.get(this.baseUrl + 'prueba');
  } */

  EditarAutor(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(this.baseUrl, autor);
  }


}