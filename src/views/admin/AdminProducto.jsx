import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct, updateProduct, addProduct } from "@services/storeService";
import DetalleProducto from "@components/DetalleProducto";
import FormProducto from "@components/FormProducto";

function AdminProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  if (id) {
    useEffect(() => {
      getProduct(id).then((res) => {
        setProducto(res);
      });
    }, []);
  }

  const handleUpdate = (key, value) => {
    setProducto({ ...producto, [key]: value });
  };

  const handleUpdateProduct = () => {
    setLoading(true);
    if (id) {
      updateProduct(producto).then((res) => {
        setLoading(false);
      });
    } else {
      addProduct(producto).then((res) => {
        setLoading(false);
        // navigate(`/admin/producto/${res.id}`);
      })
    }
  };

  if (!producto) return null;
  return (
    <div className="container-fluid">
      <div className="grid">
        <FormProducto 
          product={producto} 
          updateProduct={handleUpdateProduct} 
          updateValue={handleUpdate}
          loading={loading} 
        />
        <DetalleProducto product={producto}/>
      </div>
    </div>
  );
};

export default AdminProducto;
