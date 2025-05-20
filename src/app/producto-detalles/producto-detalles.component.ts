import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { ListaProductosComponent } from "../lista-productos/lista-productos.component";
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css'],
  
})
export class ProductoDetallesComponent implements OnInit {
  id: number;
  producto: Productos= new Productos();
  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Productos();
    this.productoServicio.obtenerProductoId(this.id).subscribe(dato => {
      this.producto = dato;
      Swal.fire(`Detalles del Producto ${this.producto.nombre}`);
    });
  }
}
