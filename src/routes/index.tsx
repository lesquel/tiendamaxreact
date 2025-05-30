import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>
        <Link
          to="/"
          className="group relative px-6 py-3 text-gray-700 font-semibold transition-all duration-300 hover:text-white"
        >
          <span className="relative z-10">Home</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 [&.active]:w-full group-hover:w-full"></div>
        </Link>

        <Link
              to="/sucursales"
              className="group relative px-6 py-3 text-gray-700 font-semibold transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">Sucursales</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 [&.active]:w-full group-hover:w-full"></div>
            </Link>
      </div>
    </div>
  );
}
