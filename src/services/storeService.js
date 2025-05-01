const getAllProducts = async () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
};

const getProduct = async (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
};

const addProduct = async (product) => {
  return fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
};

const updateProduct = async (product) => {
  return fetch(`https://fakestoreapi.com/products/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
};

const deleteProduct = async (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
};


export {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
