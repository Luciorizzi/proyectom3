

const Buttons = ({ filter, botones }) => {



 

  return (
    <div>
      <div className="filtros">
        <p>BLUSAS</p>
        <div>
          <p className="txtFiltros">CORES</p>
        </div>
        <div className="category_list">
          {botones.map((cat, i) => {
            return <button onClick={() => filter(cat)}>{cat} </button>;
          })}
        </div>
        <div>
          <p className="txtFiltros">TAMANHOS</p>
        </div>
        <div>
          <p className="txtFiltros">FAIXA DE PREÇO</p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
