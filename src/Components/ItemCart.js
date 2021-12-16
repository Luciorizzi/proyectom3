
import "../Styles/variables.scss";
const ItemCart = ({ item }) => {


  return (
    <div className="ContainerCarrito">
      <div category={item.cores}>
        <div className="align2">
          <img src={item.img} alt="item" />
        </div>

        <p className="align"> {item.name} </p>
        <div className="align txt"> R${item.price.toFixed(2)} </div>
      </div>
    </div>
  );
};

export default ItemCart;
