import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Clientes {
private http = inject(HttpClient);
private apiUrl = 'http://localhost:8080';

  getClientes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/clientes`);
  }
}
