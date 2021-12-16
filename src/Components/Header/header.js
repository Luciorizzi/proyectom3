import Bagwidget from "./Bagwidget/bagwidget";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/ItemListContainer">
        <img
          src="https://i.imgur.com/paCwXnx.png"
          className="App-logo"
          alt="logo"
        />
      </Link>
      <Bagwidget />
    </header>
  );
};
export default Header;
