import { useContext } from "react/cjs/react.development"
import { Storectxt } from "../Context/store"
import "../Styles/variables.scss"
const ItemCart = ({item}) =>{
const {products,setProducts}= useContext(Storectxt)


return(
<div className="ContainerCarrito">
<div category={item.cores}>
<div className="align2">
  <img src={item.img} alt="item" />
</div>

<p className="align"> {item.name} </p>
<div className="align txt"> R${item.price.toFixed(2)} </div>
</div>
</div>)

}

export default ItemCart