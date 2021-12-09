import { createContext } from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { getFirestore } from "../firebase/index";
export const Storectxt = createContext();

const StoreContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [items,setItems]= useState([])



  const getData = () => {
    const db = getFirestore();

    const itemCollection = db.collection("Productos");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No Hay resultados");
        }

        setProducts(querySnapshot.docs.map((doc) => doc.data()));
       setItems(querySnapshot.docs.map((doc) => doc.data()))
   
      })
      .catch((error) => {
        console.log("Error al traer los items, error");
      });
  };

  useEffect(() => {
    getData();


  }, []);

  return (
    <Storectxt.Provider value={{ products, setProducts, items}}>
      {children}
    </Storectxt.Provider>
  );
};

export default StoreContext;
