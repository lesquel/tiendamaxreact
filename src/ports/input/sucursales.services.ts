import type { Sucursal } from "../../domian/sucursales";
export interface SucursalesServices {
  getSucursales(): Promise<Sucursal[]>;
  createSucursal(sucursal: Sucursal): Promise<Sucursal>;
}
