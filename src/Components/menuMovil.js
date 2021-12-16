import { useState } from "react/cjs/react.development";
import Ordenar from "./filtros/ordenar";
import Filtros from "./filtros/filtros";
import "../Styles/variables.scss";
import { useContext, useEffect } from "react";
import { Storectxt } from "../Context/store";
const MenuMovil = ({ menu, setClear, setMenu, clear }) => {
  const [showMenu, setShowMenu] = useState();
  const {  setProducts, items } = useContext(Storectxt);

  useEffect(() => {
    if (showMenu === "ordenar") {
      setProducts(items);
    }
    if (showMenu === "filtrar") {
      setProducts(items);
    }
  }, [showMenu]);
  return (
    <div className="MenuMovil">
      <p className="txtMovil">Blusas</p>

      <button className="FiltrarMovil" onClick={() => setShowMenu("filtrar")}>
        Filtrar
      </button>
      <button className="OrdenarMovil" onClick={() => setShowMenu("ordenar")}>
        Ordenar
      </button>
      {showMenu === "filtrar" && (
        <Filtros menu={menu} setClear={setClear} clear={clear} />
      )}
      {showMenu === "ordenar" && (
        <Ordenar
          menu={menu}
          setClear={setClear}
          setMenu={setMenu}
          clear={clear}
        />
      )}
    </div>
  );
};

export default MenuMovil;
