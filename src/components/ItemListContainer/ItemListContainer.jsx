import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import Footer from "../Footer/Footer";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((resolve) => setProductos(resolve))
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div className="bgDiv">
      <h2 className="title">Productos Marolio</h2>
      <ItemList productos={productos} />
      <Footer />
    </div>
  );
};

export default ItemListContainer;
