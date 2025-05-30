import { createFileRoute } from "@tanstack/react-router";
import { SucursalForm } from "../components/sucursal/sucursalForm";
import { SucursalesList } from "../components/sucursal/sucursalList";
import { useState } from "react";

export const Route = createFileRoute("/sucursales")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isAdd, setISAdd] = useState(false);
  return (
    <div>
      <div>
        <SucursalForm setISAdd={setISAdd} isAdd={isAdd} />
        <SucursalesList isAdd={isAdd} />
      </div>
    </div>
  );
}
