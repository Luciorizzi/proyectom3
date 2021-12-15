import { useContext } from "react/cjs/react.development"
import { Storectxt } from "../Context/store"
import ItemCart from "./ItemCart"
import { Link } from "react-router-dom"
const Carrito =()=>{
const {cart, setCart} = useContext(Storectxt)

const clearCart = () => {
    setCart([]);
  };

const cambio = cart.map(
    (item) => item.price
  );
  const sumaPrecios = cambio.reduce((prev, next) => prev + next, 0);

console.log(cart)
return (
    <div className="Carrito">
          <p className="txtCarrito">Total carrito R$ {sumaPrecios} </p><button className="ClearCarrito" onClick={clearCart}>Vaciar carrito</button>
    { cart.length && cart.map((item)=>(<ItemCart item= {item}/>))}

          {!cart.length && (
            <div className="Vacio">
              <p className="txtCarrito">No has agregado ningun producto! </p>
              <Link to="/itemListContainer">
                <p className="txtCarrito">Volver a la tienda</p>
              </Link>
              </div>)}
      </div>
)

}

export default Carrito