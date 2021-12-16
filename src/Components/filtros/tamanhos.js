import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Storectxt } from "../../Context/store";
import "../../Styles/variables.scss";

const Tamanhos = ({ setClear }) => {
  const [currentTamanho, setCurrentTamanho] = useState();
  const {  setProducts, items } = useContext(Storectxt);

  useEffect(() => {
    const filterDatos = items.filter((item) => item.tamanho === currentTamanho);
    setProducts(filterDatos);
    setClear("Noclear");
  }, [currentTamanho]);

  return (
    <div>
      <p className="txtFiltros">TAMANHOS</p>
      <div className="containerTamanhos1">
        <button className="tamanhos" onClick={() => setCurrentTamanho("P")}>
          P
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("M")}>
          M
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("G")}>
          G
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("GG")}>
          GG
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("U")}>
          U
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("36")}>
          36
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("38")}>
          38
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("40")}>
          40
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("42")}>
          42
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("44")}>
          44{" "}
        </button>
        <button className="tamanhos" onClick={() => setCurrentTamanho("46")}>
          46
        </button>
      </div>
    </div>
  );
};

export default Tamanhos;
