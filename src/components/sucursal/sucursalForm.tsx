import type React from "react";

import { useState } from "react";
import type { Sucursal } from "../../domian/sucursales";
import { ApiSucursalesRepositoy } from "../../infrastructure/http/apiSucursalesRepositoy";
import { createTask } from "../../domian/sucursales";

const apiSucursales = new ApiSucursalesRepositoy();

export const SucursalForm = ({
  setISAdd,
  isAdd,
}: {
  setISAdd: Function;
  isAdd: boolean;
}) => {
  const [sucursal, setSucursal] = useState<Omit<Sucursal, "id">>({
    nombre: "",
    direccion: "",
    telefono: "",
    estado_sincronizacion: "sincronizado",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sucursal);
    await apiSucursales.createSucursal(createTask(sucursal));

    setISAdd(!isAdd);

    // Limpiar el formulario
    setSucursal({
      nombre: "",
      direccion: "",
      telefono: "",
      estado_sincronizacion: "sincronizado",
    });
  };

  return (
    <div className=" bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white text-center">
              Nueva Sucursal
            </h2>
            <p className="text-purple-100 text-center mt-2 text-sm">
              Completa la información de la sucursal
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
            {/* Nombre Field */}
            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-gray-700"
              >
                Nombre de la Sucursal
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={sucursal.nombre}
                onChange={(e) =>
                  setSucursal({ ...sucursal, nombre: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400"
                placeholder="Ej: Sucursal Centro"
                required
              />
            </div>

            {/* Dirección Field */}
            <div className="space-y-2">
              <label
                htmlFor="direccion"
                className="block text-sm font-semibold text-gray-700"
              >
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={sucursal.direccion}
                onChange={(e) =>
                  setSucursal({ ...sucursal, direccion: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400"
                placeholder="Ej: Av. Principal 123, Col. Centro"
                required
              />
            </div>

            {/* Teléfono Field */}
            <div className="space-y-2">
              <label
                htmlFor="telefono"
                className="block text-sm font-semibold text-gray-700"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={sucursal.telefono}
                onChange={(e) =>
                  setSucursal({ ...sucursal, telefono: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400"
                placeholder="Ej: +52 55 1234 5678"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Guardar Sucursal
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 pb-6">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Estado: Sincronizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
