import Header from "./Components/Header/header.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/itemListContainer.js";
import StoreContext from "./Context/store.js";

function App() {
  return (
    <StoreContext>
      <Header />
     
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </StoreContext>
  );
}

export default App;
