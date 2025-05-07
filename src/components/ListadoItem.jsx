import { NavLink } from "react-router-dom";

function ListadoItem({ product }) {
  return (
    <article>
      <header>
        <NavLink to={`/producto/${product.id}`}>
          <strong>{product.title}</strong>
        </NavLink>
      </header>
      <p>
        <NavLink to={`/producto/${product.id}`}>
          <img src={product.image} alt={product.title} width="200" />
        </NavLink>
      </p>
      <footer>
        <NavLink to={`/producto/${product.id}`}>
          <h2>{new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(product.price)}</h2>
        </NavLink>
      </footer>
    </article>
  );
}

export default ListadoItem;
