
import { useContext } from "react/cjs/react.development";
import { Storectxt } from "../Context/store";
import "../Styles/variables.scss";


const Item = ({ item}) => {
 
  const{cart,setCart}= useContext(Storectxt)


const addToCart =(item)=>{
  setCart([...cart, item])

}





  return (
    <div className="container" category={item.cores}>
      <div className="align">
        <img src={item.img} alt="item" />
      </div>

      <p className="align"> {item.name} </p>
      <div className="align txt"> R${item.price.toFixed(2)} </div>
      {item.price >= 130 && <p className="align txtBlack">ate x5 de {(item.price/ 5).toFixed(2)} </p>}
      {item.price < 130 && <p className="align txtBlack">ate x3 de {(item.price/3).toFixed(2)} </p>}
      <div className="align">
        <button className="btnCompra" onClick={() => addToCart(item)}>Comprar</button>
      </div>
    </div>
  );
};

export default Item;
