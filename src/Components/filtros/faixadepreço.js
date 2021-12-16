import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import { Storectxt } from "../../Context/store";
import { useContext } from "react";
import { useEffect } from "react";
import "../../Styles/variables.scss";
const Faixadepreço = ({ setClear, menu }) => {
  const [preço, setPreço] = useState();
  const {  setProducts, items } = useContext(Storectxt);

  const checkRef10 = useRef();
  const checkRef11 = useRef();
  const checkRef12 = useRef();
  const checkRef13 = useRef();
  const checkRef14 = useRef();
  const handleCheck2 = (e) => {
    const refArray = [
      checkRef10.current,
      checkRef11.current,
      checkRef12.current,
      checkRef13.current,
      checkRef14.current,
    ];
    refArray.map((item) => {
      if (e.target.id !== item.id) {
        item.checked = false;
      }
      return console.log("checked is..." + e.target.id);
    });
  };
  useEffect(() => {
    if (preço >= 10) {
      const filterPreço = items.filter((item) => item.price <= 50);
      setProducts(filterPreço);

      setClear("Noclear");
    }
    if (preço >= 51) {
      const filterPreço = items.filter((item) => item.price <= 150);
      setProducts(filterPreço);

      setClear("Noclear");
    }
    if (preço >= 151) {
      const filterPreço = items.filter((item) => item.price <= 300);
      setProducts(filterPreço);

      setClear("Noclear");
    }

    if (preço >= 301) {
      const filterPreço = items.filter((item) => item.price >= 301);
      setProducts(filterPreço);

      setClear("Noclear");
    }
    if (preço === 1) {
      const filterPreço = items.filter((item) => item.price <= 500);
      setProducts(filterPreço);

      setClear("Noclear");
    }
  }, [preço]);
  return (
    <div>
      <p className="txtFiltros">FAIXA DE PREÇO</p>

      <div className="category_list">
        <div className="checkbox">
          <input
            id="chk2"
            ref={checkRef10}
            onChange={handleCheck2}
            type="checkbox"
            onClick={() => setPreço(10)}
          ></input>
          de R$10 até R$50
        </div>
        <div className="checkbox">
          <input
            id="chk3"
            ref={checkRef11}
            onChange={handleCheck2}
            type="checkbox"
            onClick={() => setPreço(51)}
          ></input>
          de R$51 até R$150
        </div>
        <div className="checkbox">
          <input
            id="chk4"
            ref={checkRef12}
            onChange={handleCheck2}
            type="checkbox"
            onClick={() => setPreço(151)}
          ></input>
          de R$151 até R$300
        </div>
        <div className="checkbox">
          <input
            id="chk5"
            ref={checkRef13}
            onChange={handleCheck2}
            type="checkbox"
            onClick={() => setPreço(301)}
          ></input>
          de R$301 até R$500
        </div>
        <div className="checkbox">
          <input
            id="chk6"
            ref={checkRef14}
            onChange={handleCheck2}
            type="checkbox"
            onClick={() => setPreço(1)}
          ></input>
          a partir de R$ 01
        </div>
      </div>
    </div>
  );
};
export default Faixadepreço;
