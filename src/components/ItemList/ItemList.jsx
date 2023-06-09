import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="orderProducts">
      {productos.map((prod) => {
        return <Item key={prod.id} {...prod} />;
      })}
    </div>
  );
};

export default ItemList;
