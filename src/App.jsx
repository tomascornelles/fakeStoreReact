import { Routes, Route } from "react-router-dom";
import Navigation from "@components/Navigation";
import Listado from "@views/Listado";
import Producto from "@views/Producto";
import AdminListado from "@views/admin/AdminListado";
import AdminProducto from "@views/admin/AdminProducto";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route 
          path="/" 
          element={<Listado />} 
        />

        <Route 
          path="/producto/:id" 
          element={<Producto />} 
        />

        <Route 
          path="/admin" 
          element={<AdminListado />} 
        />

        <Route 
          path="/admin/producto/:id" 
          element={<AdminProducto />} 
        />

        <Route 
          path="/admin/producto" 
          element={<AdminProducto />} 
        />
      </Routes>
    </>
  )
}

export default App
