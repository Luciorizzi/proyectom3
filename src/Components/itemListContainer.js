import Item from "./item.js";
import "../Styles/variables.scss";
import { Storectxt } from "../Context/store";
import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Clear from "./filtros/clear.js";
import Carregador from "./carregador.js";

const ItemListContainer = () => {
  const { products } = useContext(Storectxt);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(products);
  },[products]);

  return (
    <div className="baul">
      <div>
        {" "}
        <Clear menu={menu} setMenu={setMenu} />
      </div>

      <div className="ContainerItems">
        {menu.map((item) => (
          <div key={item.id}>
            <Item item={item} menu={menu} />
          </div>
        ))}
        {products.length === 0 && (
          <p>Não há nenhum produto nesta categoria!!</p>
        )}
        <Carregador />
      </div>
    </div>
  );
};
export default ItemListContainer;
