import { useContext } from "react";
import { Storectxt } from "../../Context/store";
import "../../Styles/variables.scss";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useRef } from "react";
import Tamanhos from "./tamanhos";
import Faixadepreço from "./faixadepreço";
import Clear from "./clear";


const Filtros = ({ menu, setMenu, setClear, clear }) => {
  const { products, setProducts, items } = useContext(Storectxt);
  const [currentCategorie, setCurrentCategorie] = useState("All");

  
  const checkRef2 = useRef();
  const checkRef3 = useRef();
  const checkRef4 = useRef();
  const checkRef5 = useRef();
  const checkRef6 = useRef();
  const checkRef7 = useRef();
  const checkRef8 = useRef();
  const checkRef9 = useRef();

  const handleCheck = (e) => {
    const refArray = [
      checkRef2.current,
      checkRef3.current,
      checkRef4.current,
      checkRef5.current,
      checkRef6.current,
      checkRef7.current,
      checkRef8.current,
      checkRef9.current,
    ];

    refArray.map((item) => {
      if (e.target.id !== item.id) {
        item.checked = false;
      }
     
      return console.log("checked is..." + e.target.id);
    });
  };

  useEffect(() => {
    const filterData = items.filter(
      (item) => item.cores === currentCategorie
    );
    setProducts(filterData);
    setClear("Noclear");
  }, [currentCategorie]);

  console.log(currentCategorie);
  return (
    <div>
      <div>
        <div className="filtros">
          <p className="txtTitulo">Filtros</p>
          <div>
            <h1 className="txtH1">Blusas</h1>
            <p className="txtFiltros">CORES</p>
          </div>
          <div className="category_list">
            <div className="checkbox">
              <input
                id="chk2"
                ref={checkRef2}
                onChange={handleCheck}
                type="checkbox"
                onClick={() => setCurrentCategorie("Amarelo")}
              ></input>
              <label>Amarelo</label>
            </div>
            <div className="checkbox">
              <input
                id="chk3"
                ref={checkRef3}
                onChange={handleCheck}
                type="checkbox"
                onClick={() => setCurrentCategorie("Azul")}
              ></input>
            <label>Azul</label>
            </div>
            <div className="checkbox">
              <input
                id="chk4"
                ref={checkRef4}
                onChange={handleCheck}
                type="checkbox"
                onClick={() => setCurrentCategorie("Branco")}
              ></input>
             <label>Branco</label>
            </div>
            <div className="checkbox">
              <input
                id="chk5"
                ref={checkRef5}
                onChange={handleCheck}
                type="checkbox"
                onClick={() => setCurrentCategorie("Cinza")}
              ></input>
            <label>Cinza</label>
            </div>
            <div className="checkbox">
              <input
                id="chk6"
                ref={checkRef6}
                onChange={handleCheck}
                type="checkbox"
                onClick={() => setCurrentCategorie("Laranja")}
              ></input>
             <label>Laranja</label>
            </div>
            <div className="mas">
              <ul>
                Ver todas as cores ↓
                <li>
                  <input
                    id="chk7"
                    ref={checkRef7}
                    onChange={handleCheck}
                    className="boton"
                    type="checkbox"
                    onClick={() => setCurrentCategorie("Sim cor")}
                  ></input>
                 <label>Sim cor</label>
                </li>
                <li>
                  <input
                    id="chk8"
                    ref={checkRef8}
                    onChange={handleCheck}
                    className="boton"
                    type="checkbox"
                    onClick={() => setCurrentCategorie("Rosado")}
                  ></input>
               <label>Rosado</label>
                </li>
                <li>
                  <input
                    id="chk9"
                    ref={checkRef9}
                    onChange={handleCheck}
                    type="checkbox"
                    className="boton"
                    onClick={() => setCurrentCategorie("Vermelho")}
                  ></input>
                <label>Vermelho</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="padding">
            <Tamanhos
              setClear={setClear}
              menu={menu}
              setMenu={setMenu}
              currentCategorie={currentCategorie}
            />
          </div>
          <div>
            <Faixadepreço menu={menu} setClear= {setClear} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtros;
