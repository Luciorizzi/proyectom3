import { useContext } from "react/cjs/react.development";
import { Storectxt } from "../../../Context/store";

import { Link } from "react-router-dom";

const Bagwidget = () => {
  const { cart} = useContext(Storectxt);

  return (
    <Link to="/Carrito">
      <div className="bagContainer">
        <img
          src="https://i.imgur.com/Xj7gzkU.png"
          className="Bag-logo"
          alt="bag"
        />{" "}
        {cart.length >= 1 && <p className="bagTxt"> {cart.length} </p>}
      </div>
    </Link>
  );
};

export default Bagwidget;
