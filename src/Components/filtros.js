import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Storectxt } from "../Context/store";
import Buttons from "./buttons";

const Filtros = () => {
  const { products, setProducts, items } = useContext(Storectxt);
  const allCategories = ["All", ...items.map((items) => items.cores)];
  const [botones, setBotones] = useState(allCategories);

  console.log("botones", botones);
  console.log("allCategories", allCategories);

  const filter = (button) => {
    const filterData = products.filter((item) => item.cores === button);
    setProducts(filterData);
  };

  return (
    <div>
      <Buttons filter={filter} botones={botones} />
    </div>
  );
};

export default Filtros;
