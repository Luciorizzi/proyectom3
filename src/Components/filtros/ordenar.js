import { useEffect } from "react";
import {  useState } from "react/cjs/react.development";

import "../../Styles/variables.scss";

const Ordenar = ({ menu, setClear, setMenu, clear }) => {
  const [ordenado, setOrdenado] = useState();
  const menor = menu.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
  });

  useEffect(() => {
    if (ordenado === "Menor") {
      setMenu(menor);
    }

   else  {
      const mayor = menor.reverse();
      setMenu(mayor);
    }
    if (ordenado === "Recientes") {
      const recientes = menu.sort(function (a, b) {
        return b.id - a.id;
      });
      setMenu(recientes);
    }
  }, [ordenado]);

  return (
    <div className="ContainerOrdenar">
      <ul>
        <button className="Ordenar"> Ordenar por:↓</button>
        <li>
          <button
            className="OrdenType"
            onClick={() => setOrdenado("Recientes")}
          >
            Mais recentes{" "}
          </button>
        </li>
        <li>
          {" "}
          <button className="OrdenType2" onClick={() => setOrdenado("Menor")}>
            Menor preço{" "}
          </button>
        </li>
        <li>
          {" "}
          <button className="OrdenType3" onClick={() => setOrdenado("Mayor")}>
            Maior preço{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Ordenar;
