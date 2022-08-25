import carrito from "../components/Image/carrito.png";

const CartWidget = () => {
    return (
      <header className="carrito">
        <img> src={carrito} alt="carrito" </img>
        <p> 3</p>
      </header>
    );
  }
  
  export default CartWidget;
  