import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import { Storectxt } from "../../Context/store";
import "../../Styles/variables.scss";

const Ordenar = ({ menu, setClear, setMenu, clear }) => {
  const [ordenado, setOrdenado] = useState();
  const {products,setProducts}= useContext(Storectxt)
  const menor = menu.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
  });

  useEffect(() => {
    if (ordenado === "Menor") {
     
      setMenu(menor);
    }

    if (ordenado === "Mayor") {
      const mayor = menor.reverse();
      setMenu(mayor);

      console.log("mayor", mayor);
    }
    if (ordenado === "Recientes") {
      const recientes = menu.sort(function (a, b) {
        return b.id - a.id;
      });
      setMenu(recientes);
      console.log("recientes", recientes);
    }
console.log('clear',clear)
    console.log("mmenor", menor);

    console.log('ordenado', ordenado)
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
