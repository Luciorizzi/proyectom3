
import Bagwidget from "./Bagwidget/bagwidget";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Header =() => {

   

return(
<header className="App-header">

 <a href="https://m3ecommerce.com/"><img  src="https://i.imgur.com/paCwXnx.png" className="App-logo" alt="logo" />
 </a>
<Bagwidget/>
</header>
)

}
export default Header;