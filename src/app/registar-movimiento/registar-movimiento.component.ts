import { Component } from '@angular/core';
import { MovimientoService } from '../movimiento.service';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  


@Component({
  selector: 'app-registar-movimiento',
  templateUrl: './registar-movimiento.component.html',
  standalone: true,            
  imports: [CommonModule, FormsModule]
})
export class RegistrarMovimientoComponent {
  codigoProducto: string = '';
  cantidad: number = 1;

  producto: any = null;  

  constructor(
    private movimientoService: MovimientoService,
    private productoService: ProductoService
  ) {}

  
  buscarProducto(): void {
    if (!this.codigoProducto) {
      alert('Ingresa un código de producto para buscar');
      return;
    }

    this.productoService.buscarPorCodigo(this.codigoProducto).subscribe({
      next: (prod) => {
        console.log('Producto recibido:', prod);
        this.producto = prod;
      },
      error: () => {
        alert('Producto no encontrado');
        this.producto = null;
      }
    });
  }

  registrar(): void {
    this.movimientoService.registrarMovimiento(this.codigoProducto, this.cantidad).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Movimiento registrado correctamente', 'success');
        this.producto = null;
        this.codigoProducto = '';
        this.cantidad = 1;
      },
      error: (err) => {
        Swal.fire('Error', err.error, 'error');
      }
    });
  }
}