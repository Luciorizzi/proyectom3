import { useContext } from "react/cjs/react.development";
import { Storectxt } from "../../../Context/store";



const Bagwidget = () => {
const {cart,setCart}= useContext(Storectxt)



  return (<div className="bagContainer">
    <img src="https://i.imgur.com/Xj7gzkU.png" className="Bag-logo" alt="bag" />  <p className="bagTxt">{cart.length} </p>
    </div>
  );
};

export default Bagwidget;
