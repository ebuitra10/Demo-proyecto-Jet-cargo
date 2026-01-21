import { Injectable } from '@angular/core';
import { Envio } from '../models/envio.model';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  private envios: Envio[] = [
    {
      warehouse: 'WH-001',
      manifiesto: 'MNF-1001',
      cliente: 'Juan Pérez',
      telefono: '3001234567',
      estado: 'Despachado',
      observaciones: 'No esta en casa'
    },
    {
      warehouse: 'WH-002',
      manifiesto: 'MNF-1002',
      cliente: 'María Gómez',
      telefono: '3109876543',
      estado: 'En alistamiento',
      observaciones: 'Cliente no estaba en casa'
    }
  ];

  getEnvios(): Envio[] {
    return this.envios;
  }

  updateEnvio(envio: Envio) {
    const index = this.envios.findIndex(e => e.warehouse === envio.warehouse);
    if (index !== -1) {
      this.envios[index] = { ...envio };
    }
  }

  mockUploadExcel() {
    this.envios.push({
      warehouse: 'WH-003',
      manifiesto: 'MNF-1003',
      cliente: 'Carlos Ramírez',
      telefono: '3205558899',
      estado: 'Despachado',
      observaciones: ''
    });
  }

  buscarPorWarehouse(warehouse: string) {
  return this.envios.find(
    e => e.warehouse.toLowerCase() === warehouse.toLowerCase()
  );
}

}
