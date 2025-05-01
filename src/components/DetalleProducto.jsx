function DetalleProducto({ product }) {
  return (
    <article>
      <header>
        <h1>{product.title}</h1>
      </header>
      <div className="grid">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <p>
            Categoría: {product.category}
            <br />
            {product.rating && (
              <em>
                {product.rating.rate} ({product.rating.count} reviews)
              </em>
            )}
          </p>
          <p>{product.description}</p>
        </div>
      </div>
      <footer>
        <h2>${product.price}</h2>
      </footer>
    </article>
  );
}

export default DetalleProducto;
