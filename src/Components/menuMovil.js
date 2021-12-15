import { useState } from "react/cjs/react.development"
import Ordenar from "./filtros/ordenar"
import Filtros from "./filtros/filtros"
import "../Styles/variables.scss"
const MenuMovil = ({menu,setClear,setMenu,clear})=>{
const [showMenu, setShowMenu]= useState(false)

return(
    <div>
    <p className="txtMovil">Blusas</p>   
    <button className="FiltrarMovil" onClick={()=> setShowMenu(true)} >Filtrar</button>
    <Ordenar menu={menu} setClear={setClear} setMenu={setMenu} clear={clear} />

</div>
)

}

export default MenuMovil