
import React from "react";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;

// src/products.js

const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Category A",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 20,
    },
    // Add more products
  ];
  
  export default products;