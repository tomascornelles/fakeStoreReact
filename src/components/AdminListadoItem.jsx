import { NavLink } from "react-router-dom";
import DeleteButton from "@components/DeleteButton";

function AdminListadoItem({ product }) {
  return (
    <tr>
      <td>
        {product.title}
      </td>
      <td>
        <img src={product.image} alt={product.title} width="100" />
      </td>
      <td>
        ${product.price}
      </td>
      <td style={{ width: "300px" }}>
        <div className="grid">
          <NavLink to={`/admin/producto/${product.id}`} role="button">
            Editar
          </NavLink>
          <DeleteButton id={product.id} />
        </div>
      </td>
    </tr>
  );
}

export default AdminListadoItem;
