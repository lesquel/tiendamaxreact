"use client"

import { useEffect, useState } from "react"
import type { Sucursal } from "../../domian/sucursales"
import { ApiSucursalesRepositoy } from "../../infrastructure/http/apiSucursalesRepositoy"

const apiSucursales = new ApiSucursalesRepositoy()

export const SucursalesList = ({ isAdd }: { isAdd: boolean }) => {
  const [sucursales, setSucursales] = useState<Sucursal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSucursales() {
      setLoading(true)
      const sucursales = await apiSucursales.getSucursales()
      setSucursales(sucursales)
      setLoading(false)
    }

    fetchSucursales()
  }, [isAdd])

  // Estado de carga
  if (loading) {
    return (
      <div className="min-h-[300px] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">Cargando sucursales...</p>
      </div>
    )
  }

  // Estado sin sucursales
  if (sucursales === null || sucursales.length === 0) {
    return (
      <div className="min-h-[300px] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">No hay sucursales</h3>
        <p className="text-gray-500 text-center max-w-xs">
          No se encontraron sucursales registradas. Utiliza el formulario para crear una nueva.
        </p>
      </div>
    )
  }

  // Lista de sucursales
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 rounded-2xl">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white text-center">Sucursales</h2>
          <p className="text-purple-100 text-center mt-2 text-sm">
            {sucursales.length} {sucursales.length === 1 ? "sucursal encontrada" : "sucursales encontradas"}
          </p>
        </div>

        {/* Lista */}
        <div className="divide-y divide-gray-100">
          {sucursales.map((sucursal) => (
            <div key={sucursal.id} className="p-6 hover:bg-purple-50 transition-colors duration-150">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800">{sucursal.nombre}</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm">{sucursal.direccion || "Sin dirección"}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-sm">{sucursal.telefono || "Sin teléfono"}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${
                      sucursal.estado_sincronizacion === "sincronizado"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
                  `}
                  >
                    {sucursal.estado_sincronizacion === "sincronizado" ? "Sincronizado" : "Pendiente"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500">
          Última actualización: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  )
}
