import "./item.css";

const Item = ({ item }) => {


  return (
    <div className="container" category={item.cores}>
      <div className="align" >
        <img src={item.img} alt="item" />
      </div>
     
      <p className="align"> {item.name} </p>
      <div className="align txt"> R${item.price} </div>
      <div className="align">
        <button className="btnCompra">Comprar</button>
      </div>
    </div>
  );
};

export default Item;
