import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { Envio } from '../models/envio.model';
import { EnviosService } from '../services/envios.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  envios: Envio[] = [];
  enviosFiltrados: Envio[] = [];

  busquedaWarehouse: string = '';
  envioEditando: Envio | null = null;

  constructor(private enviosService: EnviosService,
    public router: Router
  ) {
    this.envios = this.enviosService.getEnvios();
    this.enviosFiltrados = [...this.envios];
  }

  subirExcelMock() {
    this.enviosService.mockUploadExcel();
    this.envios = this.enviosService.getEnvios();
    this.filtrar();
  }

  filtrar() {
    const texto = this.busquedaWarehouse.toLowerCase().trim();

    if (!texto) {
      this.enviosFiltrados = [...this.envios];
      return;
    }

    this.enviosFiltrados = this.envios.filter(e =>
      e.warehouse.toLowerCase().includes(texto)
    );
  }

  editar(envio: Envio) {
    this.envioEditando = { ...envio };
  }

  guardar() {
    if (this.envioEditando) {
      this.enviosService.updateEnvio(this.envioEditando);
      this.envios = this.enviosService.getEnvios();
      this.filtrar();
      this.envioEditando = null;
    }
  }

  cancelar() {
    this.envioEditando = null;
  }
}
