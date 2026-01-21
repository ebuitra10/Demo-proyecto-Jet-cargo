import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { EnviosService } from '../services/envios.service';
import { Envio } from '../models/envio.model';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  warehouseInput: string = '';
  resultado: Envio | null = null;
  noEncontrado = false;

  constructor(
    private enviosService: EnviosService,
    private router: Router
  ) {}

  buscar() {
    this.noEncontrado = false;
    this.resultado = null;

    if (!this.warehouseInput.trim()) return;

    const envio = this.enviosService.buscarPorWarehouse(this.warehouseInput);

    if (envio) {
      this.resultado = envio;
    } else {
      this.noEncontrado = true;
    }
  }

  irAdmin() {
    this.router.navigate(['/admin']);
  }
}
