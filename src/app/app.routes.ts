import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'cliente', component: ClienteComponent }
];
