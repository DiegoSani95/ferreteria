import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { RegistrarMovimientoComponent } from './registar-movimiento/registar-movimiento.component';

export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'registrar-producto', component: RegistrarProductoComponent },
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent },
  { path: 'producto-detalles/:id', component: ProductoDetallesComponent },
  { path: 'registar-movimiento', component: RegistrarMovimientoComponent },
  {
    path: 'movimientos',
    loadComponent: () =>
      import('./movimiento-lista/movimiento-lista.component')
        .then(m => m.MovimientoListaComponent)
  },
  { path: '', redirectTo: 'productos', pathMatch: 'full' }
];