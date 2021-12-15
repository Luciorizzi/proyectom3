import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../firebase";
const Carregador = () => {
  const[ showCarregador, setShowCarregador ] = useState();

    const[datos, setDatos]=useState(
    {Id:'',
    name:'',
    img:'',
    price:'',
    cores:'',
    tamanho:''})


    const newProducts = datos


   function guardar()  {
     const ID= document.getElementById("ID").value
     const PARSE_ID = parseInt(ID)
     const CORES= document.getElementById("CORES").value
     const IMG= document.getElementById("IMG").value
     const NAME= document.getElementById("NAME").value
     const PRICE= document.getElementById("PRICE").value
     const PARSEPRICE= parseInt(PRICE)
     const TAMANHO= document.getElementById("TAMANHO").value
       const Collection = db.collection("Productos")
        Collection
        .add({
            cores: CORES,
            id: PARSE_ID,
            img: IMG,
            name: NAME,
            price: PARSEPRICE,
            tamanho:TAMANHO
            
        })
        .then(function(docRef){
            console.log("Document writen succesfully", docRef.id)
        })
        .catch(function(error){
            console.log.error("Error al agregar los productos", error)
        }
        )
    }

const handleInputChange = (event) =>{
    setDatos({...datos,
        [event.target.name] : event.target.value
    })
}


const sumbit = (e)=>{
    e.preventDefault()
    guardar()
}


  return (
    <div> 
      <button onClick={()=> setShowCarregador('true')} className="Carregar">Carregar Mais</button>
   
     {showCarregador === 'true' &&  
     <form className="ContainerInputs" onSubmit={sumbit}> 
          <input id="ID" onChange={handleInputChange} type="number" placeholder="id" className="inputCarregar"></input>
          <input   id="NAME" onChange={handleInputChange}  name="name"placeholder="name" className="inputCarregar"></input>
          <input id="IMG"  onChange={handleInputChange}   name="img"placeholder=" /direct link/ size=195x293 " className="inputCarregar"></input>
          <input  id="PRICE" onChange={handleInputChange} type="number" placeholder="price" className="inputCarregar"></input>
          <input id="CORES"  onChange={handleInputChange}  name="cores" placeholder="cores" className="inputCarregar"></input>
          <input   id="TAMANHO"onChange={handleInputChange}   name="tamanho"placeholder="tamanho" className="inputCarregar"></input>
          <button onClick={sumbit} type="sumbit" className="Carregar">Carregar</button>
       </form> }
    </div>
  );
};

export default Carregador;
