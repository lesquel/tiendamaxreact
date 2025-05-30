import { useState } from "react";
import { Link } from "@tanstack/react-router"; // Importar Link
import { Bolt, ChartArea, GitBranch } from "lucide-react";

const LinkIconNav = ({
  to,
  children,
  isCollapsed,
  Icon,
}: {
  to: string;
  children: string;
  isCollapsed: boolean;
  Icon?: any;
}) => {
  return (
    <Link
      to={to}
      className="group flex items-center p-3 rounded-xl hover:bg-purple-50 transition-all duration-200"
    >
      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
        <Icon />
      </div>
      {!isCollapsed && (
        <div className="ml-3">
          <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-200">
            {children}
          </span>
          <p className="text-xs text-gray-500">Vista general</p>
        </div>
      )}
    </Link>
  );
};
export const Slider = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${isCollapsed ? "w-20" : "w-80"} transition-all duration-300 bg-white shadow-2xl border-r border-gray-100 flex flex-col`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div
            className={`${isCollapsed ? "hidden" : "block"} transition-all duration-300`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xl font-bold">M</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Miquel</h2>
                <p className="text-purple-100 text-sm">Administrador</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-2">
        {!isCollapsed && (
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navegación
            </h3>
          </div>
        )}

        {/* Dashboard */}
        <LinkIconNav
          to="/"
          children="Dashboard"
          isCollapsed={isCollapsed}
          Icon={ChartArea}
        />

        {/* Sucursales */}
        <LinkIconNav
          to="/sucursales"
          children="Sucursales"
          isCollapsed={isCollapsed}
          Icon={GitBranch}
        />

        {/* Configuración */}
        <LinkIconNav
          to="/configuracion"
          children="Configuración"
          isCollapsed={isCollapsed}
          Icon={Bolt}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        {!isCollapsed && (
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Sistema Activo
                </p>
                <p className="text-xs text-gray-500">Última sync: hace 2 min</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
