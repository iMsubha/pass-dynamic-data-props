import React from "react";

function Product(props) {
  //console.log(props);
  // const [name, price] = props;
  const styleCard = {
    backgroundColor: "cyan",
    width: "200px",
    height: "150px",
    borderRadius: "10px",
    marginTop: "10px",
    color: "black",
  };
  return (
    <div style={styleCard}>
      <h4>{props.name}</h4>
      <h3>{props.price}</h3>
      <button>Click me</button>
    </div>
  );
}

export default Product;
