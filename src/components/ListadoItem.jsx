import { NavLink } from "react-router-dom";

function ListadoItem({ product }) {
  return (
    <NavLink to={`/producto/${product.id}`}>
      <article>
        <header>
          <h1>{product.title}</h1>
        </header>
        <p>
          <img src={product.image} alt={product.title} width="200" />
        </p>
        <footer>
          <h2>${product.price}</h2>
        </footer>
      </article>
    </NavLink>
  );
}

export default ListadoItem;
