import { Component } from '@angular/core';
import { Productos} from '../productos';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, tap, throwError } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-producto',
   standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.css'
})
export class RegistrarProductoComponent {
   producto: Productos = new Productos();
  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarProducto() {
    this.productoServicio.registrarProducto(this.producto).pipe(
      tap(dato => {
        console.log(dato);
        this.irALaListaDeProductos();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }

  irALaListaDeProductos() {
    this.router.navigate(['/productos']);
    Swal.fire('Producto Registrado', `El producto ${this.producto.nombre} ha sido registrado con exito`, `success`);
  }

  onSubmit() {
    this.guardarProducto();
  }

}
