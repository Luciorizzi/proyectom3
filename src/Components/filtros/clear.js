import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Storectxt } from "../../Context/store";
import "../../Styles/variables.scss";
import Filtros from "./filtros";
import Ordenar from "./ordenar";
import MenuMovil from "../menuMovil";
const Clear = ({ menu, setMenu }) => {
  const [clear, setClear] = useState("NoClear");
  const { products, setProducts, items } = useContext(Storectxt);

  useEffect(() => {
    if (clear === "clear") {
      setProducts(items);
    }


  }, [clear]);
  console.log(clear);

  return (

    <div className="ContainerClear">
      
     
      <button className="Clear" onClick={() => setClear("clear")}> Filtros Limpos </button> 
     
      <MenuMovil menu={menu} setClear={setClear} setMenu={setMenu} clear={clear}/>
      <div className="ContainerFiltros">
      <Ordenar menu={menu} setClear={setClear} setMenu={setMenu} clear={clear}/>
        <Filtros menu={menu} setMenu={setMenu} setClear={setClear} clear= {clear} />
      </div>
  </div>
  
  );
};
export default Clear;
