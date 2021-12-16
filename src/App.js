import Header from "./Components/Header/header.js";
import "./Styles/variables.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/itemListContainer.js";
import StoreContext from "./Context/store.js";
import Footer from "./Components/footer.js";
import Carrito from "./Components/carrito.js";
function App() {
  return (
    <StoreContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
        </Routes>
        <Routes>
          <Route exact path="/Carrito" element={<Carrito />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/ItemListContainer"
            element={<ItemListContainer />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </StoreContext>
  );
}

export default App;
