import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ img, nombre, precio, id }) => {
  return (
    <div className="cardProduct">
      <img className="imgItem img-fluid" src={img} alt={nombre} />

      <h2 className="nombreItem"> {nombre} </h2>
      <p className="precioItem"> {precio} </p>
      <p className="idItem"> Id: {id} </p>
      <Link className="verDetalles" to={`/item/${id}`}>
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
