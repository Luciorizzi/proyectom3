
import Item from "./item.js";
import "./item.css";
import { Storectxt } from "../Context/store";
import { useContext } from "react";
import Filtros from "./filtros";
import { useState } from "react/cjs/react.development";


const ItemListContainer = () => {
  const {products} = useContext(Storectxt);
  
  


  return (
    <div className="baul">
    <div><Filtros/></div>
    <div className="hola">
      {products.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
    </div>
  );
};
export default ItemListContainer;
