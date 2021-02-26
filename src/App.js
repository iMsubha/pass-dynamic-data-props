import "./App.css";
import Person from "./components/Person.jsx";
import Product from "./components/Product";
function App() {
  const productList = [
    { name: "Photoshop", price: "$67.99" },
    { name: "Adobe", price: "$47.99" },
    { name: "Premeire pro", price: "$77.99" },
    { name: "Illustrator", price: "$97.99" },
    { name: "Photo Editor", price: "$27.99" },
  ];

  return (
    <div className="App">
      {/* <Product
        name={productList[0].name}
        price={productList[0].price}
      ></Product>
      <Product
        name={productList[1].name}
        price={productList[1].price}
      ></Product>
      <Product
        name={productList[2].name}
        price={productList[2].price}
      ></Product>
      <Product
        name={productList[3].name}
        price={productList[3].price}
      ></Product>
      <Product
        name={productList[4].name}
        price={productList[0].price}
      ></Product> */}
      {productList.map((product) => (
        <Product name={product.name} price={product.price} />
      ))}

      <Person name="Hakib" job="SE"></Person>
      <Person name="Sakib" job="Hero"></Person>
      <Person name="Roksana" job="Doctor"></Person>
    </div>
  );
}

export default App;
