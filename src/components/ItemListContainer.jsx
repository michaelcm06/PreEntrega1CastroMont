import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../firebase/configuracion';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(database, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((resp) => {
        setLoading(false)
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [categoria]);



  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <ItemList productos={productos} loading={loading} />
    </div>
  );
};

export default ItemListContainer;