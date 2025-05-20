import { Component } from '@angular/core';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APLICACION GESTION PRODUCTOS Y FACTURACION';
}