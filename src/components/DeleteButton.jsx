import { deleteProduct } from "@services/storeService";
import { useState } from 'react'

function DeleteButton({ id }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteProduct(id);
    setShowConfirm(false);
  };

  const confirmDelete = () => {
    setShowConfirm(true);
  }

  if (showConfirm) {
    return (
      <dialog open>
        <article>
          <p>Estas seguro?</p>
          <p className="grid">
            <button onClick={() => setShowConfirm(false)} className="outline">No</button>
            <button onClick={handleDelete}>Si</button>
          </p>
        </article>
      </dialog>
    );
  }

  if (!id) return null; 

  return (
    <button 
      onClick={confirmDelete}
      className="outline"
    >
      Borrar
    </button>
  );
}

export default DeleteButton;
