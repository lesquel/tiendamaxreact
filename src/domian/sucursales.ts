export interface Sucursal {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
  estado_sincronizacion: string;
}


export const createTask = (sucursal: Omit<Sucursal, "id">): Omit<Sucursal, "id"> => {
  return {
    nombre: sucursal.nombre,
    direccion: sucursal.direccion,
    telefono: sucursal.telefono,
    estado_sincronizacion: sucursal.estado_sincronizacion,
  };
};
