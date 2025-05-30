import { useState } from "react";
import { SucursalesList } from "./components/sucursal/sucursalList"
import { SucursalForm } from "./components/sucursal/sucursalForm";

function App() {
  const [isAdd, setISAdd] = useState(false);
  return (
    <div>
      <h1>Miquel</h1>
      <SucursalForm setISAdd={setISAdd} isAdd={isAdd} />
      <SucursalesList isAdd={isAdd} />
    </div>
  )    
}

export default App
