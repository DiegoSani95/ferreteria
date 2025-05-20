import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovimientoService } from '../movimiento.service';

@Component({
  standalone: true,
  selector: 'app-movimiento-lista',
  templateUrl: './movimiento-lista.component.html',
  styleUrls: ['./movimiento-lista.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MovimientoListaComponent implements OnInit {

  movimientos: any[] = []; // <-- Estaba faltando esta propiedad
  movimientosFiltrados: any[] = [];
  filtroCodigo: string = '';
  cargando: boolean = false; // <-- También faltaba

  constructor(private movimientoService: MovimientoService) {}

  ngOnInit(): void {
    this.cargando = true;
    this.movimientoService.obtenerMovimientos().subscribe({
      next: (data) => {
        console.log('Movimientos:', data);
        this.movimientos = data;
        this.movimientosFiltrados = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
        console.error('Error al obtener movimientos');
      }
    });
  }

  buscarPorCodigo(): void {
    console.log('Buscando código:', this.filtroCodigo);
    const codigo = this.filtroCodigo.trim().toLowerCase();
    if (!codigo) {
      this.movimientosFiltrados = this.movimientos;
    } else {
      this.movimientosFiltrados = this.movimientos.filter(mov =>
        mov.codigoProducto.toLowerCase().includes(codigo)
      );
    }
  }
}