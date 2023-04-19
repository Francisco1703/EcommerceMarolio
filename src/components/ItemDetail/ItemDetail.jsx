import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

  return (
    <div className="contenedorItem">
      <div className="contenedorImg">
        <img className="imgDetail" src={img} alt={nombre} />
        {agregarCantidad > 0 ? (
          <Link to={"/cart"} className="terminarCompra">
            {" "}
            Terminar Compra{" "}
          </Link>
        ) : (
          <ItemCount inicial={1} stock={stock} onAdd={manejadorCantidad} />
        )}
      </div>
      <div className="divisor">
        <h2 className="nombreDetail"> {nombre} </h2>
        <h2 className="precioDetail"> {precio} </h2>
        <p className="idDetail"> ID: {id} </p>
        <p className="descripcion">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          atque consequuntur, culpa natus voluptatibus adipisci beatae ratione
          deleniti sequi vitae tempora qui accusamus officia, magni sint et fuga
          animi cumque?
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
