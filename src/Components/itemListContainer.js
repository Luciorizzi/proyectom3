
import Item from "./item.js";
import "../Styles/variables.scss";
import { Storectxt } from "../Context/store";
import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Clear from "./filtros/clear.js";


const ItemListContainer = () => {
  const {products,setProducts, items} = useContext(Storectxt);
  const [menu, setMenu]= useState([])

 
useEffect(()=>{
  setMenu(products)
console.log(products)

})

  return (
    <div className="baul">
    <div> <Clear menu= {menu} setMenu={setMenu} /></div>
   
    <div className="hola">
      {menu.map((item) => (
        <div key={item.id}>
          <Item item={item} menu= {menu} />
        </div>
      ))}
    </div>
    </div>
  );
};
export default ItemListContainer;
