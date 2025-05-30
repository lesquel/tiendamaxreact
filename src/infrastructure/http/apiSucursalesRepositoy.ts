import type { Sucursal } from "../../domian/sucursales";
import type { SucursalesServices } from "../../ports/input/sucursales.services";

export class ApiSucursalesRepositoy implements SucursalesServices {

  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:8080";
  }

  async getSucursales(): Promise<Sucursal[]> {
    const response = await fetch(`${this.baseUrl}/sucursales`);
    const sucursales = await response.json() as Promise<Sucursal[]>;
    console.log(sucursales);
    return sucursales;
  }

  async createSucursal(sucursal: Omit<Sucursal, "id">): Promise<Sucursal> {
    const response = await fetch(`${this.baseUrl}/sucursales`, {
      method: "POST",
      body: JSON.stringify(sucursal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const sucursalCreated = await response.json() as Promise<Sucursal>;
    console.log(sucursalCreated);
    return sucursalCreated;
  }
}
