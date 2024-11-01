import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
}
