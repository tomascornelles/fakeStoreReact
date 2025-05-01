import ListadoProductos from "@components/ListadoProductos";
import { NavLink } from "react-router-dom";

function Listado() {
  return (
    <div className="container-fluid">
      <h1>Listado Admin</h1>
      <NavLink to="/admin/producto" role="button">Nuevo producto</NavLink>

      <ListadoProductos admin={true} />
    </div>
  );
};

export default Listado;
