
export interface Envio {
  warehouse: string;
  manifiesto: string;
  cliente: string;
  telefono: string;
  estado: 'En origen (Bogotá)' | 'En origen (Miami)' | 'En origen (Los Ángeles)' | 'En alistamiento' | 'Despachado'| 'En trayecto' | 'Proceso aduanero' | 'En destino';
  observaciones: string;
}


