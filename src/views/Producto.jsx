import DetalleProducto from "@components/DetalleProducto";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "@services/storeService";

function Producto() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getProduct(id).then((res) => {
      console.log(res);
      setProducto(res);
    });
  }, []);

  if (!producto) return null;
  return (
    <div className="container-fluid">
      <DetalleProducto product={producto}/>
    </div>
  );
};

export default Producto;
