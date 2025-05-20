import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos } from '../productos';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Productos[];

  constructor(private productoServico: ProductoService, private router: Router) { }


  ngOnInit(): void {
    this.obtenerProductos();

  }
  actualizarProducto(id: number) {
    this.router.navigate(['actualizar-producto', id]);
  }


  private obtenerProductos() {
    this.productoServico.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
    }
    );
  }
  eliminarProducto(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar al Producto",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.productoServico.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
          Swal.fire(
            'Producto eliminado',
            'El Producto ha sido eliminado con exito',
            'success'

          )
        })
      }
    });


  }
  verDetallesDelProducto(id: number) {
    this.router.navigate(['producto-detalles', id]);
  }



}