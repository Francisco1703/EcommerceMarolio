import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="divCarrito">
      <img
        className="imgCarrito"
        src="../Img/carrito.png"
        alt="Imagen del Carrito"
      />
      <p className="number">0</p>
    </div>
  );
};

export default CartWidget;
