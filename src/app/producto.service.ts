import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Esta Url obtine todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/productos";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para Obtener los empleados
  obtenerListaProductos(): Observable<Productos[]> {
    return this.httpClient.get<Productos[]>(`${this.baseURL}`);
  }
  registrarProducto(producto: Productos): Observable<Productos> {
    return this.httpClient.post<Productos>(this.baseURL, producto);
  }
//este metodo sirve para actualizar el empleado
  actualizarProducto(id: number, producto: Productos): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, producto);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerProductoId(id: number): Observable<Productos> {
    return this.httpClient.get<Productos>(`${this.baseURL}/${id}`);
  }

  eliminarProducto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  buscarPorCodigo(codigo: string) {
  return this.httpClient.get<any>(`${this.baseURL}/buscar?codigo=${codigo}`);
  }
}
