import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database } from "../firebase/configuracion";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(database, "productos", id)
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id })
      })
  }, [id]);

  return (
    <>
      {item && <ItemDetail item={item} />}
    </>
  );
};

export default ItemDetailContainer;