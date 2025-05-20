import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, of, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent  {

  id!: number;
  producto: Productos = new Productos();

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productoService.obtenerProductoId(this.id).pipe(
      tap(data => {
        this.producto = data;
      }),
      catchError(error => {
        console.error('Error al cargar el producto:', error);
        return of(null);
      })
    ).subscribe();
  }

  onSubmit(): void {
    if (this.producto) {
      this.productoService.actualizarProducto(this.id, this.producto).pipe(
        tap(() => {
          this.irAlaListaDeProductos();
        }),
        catchError(error => {
          console.error('Error al actualizar el producto:', error);
          return of(null);
        })
      ).subscribe();
    }
  }

  irAlaListaDeProductos(): void {
    this.router.navigate(['/productos']);
    Swal.fire('Producto actualizado', `El producto ${this.producto.nombre} ha sido actualizado con éxito`, 'success');
  }
}
