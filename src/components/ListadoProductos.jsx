import { useState, useEffect } from "react";
import { getAllProducts } from '@services/storeService'
import ListadoItem from '@components/ListadoItem'
import AdminListadoItem from '@components/AdminListadoItem'

function ListadoProductos({ admin = false }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await getAllProducts();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);


  if (products.length === 0) {
    return (
      <article>Loading...</article>
    );
  } else if (admin) {
    return (
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <AdminListadoItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <>
      {products.map((product) => (
        <ListadoItem key={product.id} product={product} />
      ))}
      </>
    );
  }
}

export default ListadoProductos;
