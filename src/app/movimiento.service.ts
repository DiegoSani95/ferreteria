import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimiento } from './movimiento';  // Asegúrate de tener esta interfaz/modelo creada

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private apiUrl = 'http://localhost:8080/api/v1/movimientos';

  constructor(private httpClient: HttpClient) { }

  obtenerMovimientos(): Observable<Movimiento[]> {
    return this.httpClient.get<Movimiento[]>(this.apiUrl);
  }

  registrarMovimiento(codigo: string, cantidad: number): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/movimientos', {
      codigoProducto: codigo,
      cantidad: cantidad
    });
  }
}