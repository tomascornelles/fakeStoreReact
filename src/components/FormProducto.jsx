import DeleteButton from "@components/DeleteButton";
function FormProducto({ product, updateValue, updateProduct, loading }) {
  return (
    <article>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={product.title}
          onChange={(e) => updateValue(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          defaultValue={product.price}
          onChange={(e) => updateValue(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={product.image}
          onChange={(e) => updateValue(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          defaultValue={product.category}
          onChange={(e) => updateValue(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          defaultValue={product.description}
          onChange={(e) => updateValue(e.target.name, e.target.value)}
        />
      </div>
      <div className="grid">
        <DeleteButton id={product.id} />
        <button onClick={() => updateProduct()} disabled={loading}>Guardar</button>
      </div>
    </article>
  );
}

export default FormProducto;
