import React, { useState } from "react";
import products from "./products";

function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (product) => category === "" || product.category === category
    );

  return (
    <div>
      <h1>E-Commerce Product Listing</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {Array.from(new Set(products.map((product) => product.category)).add('')).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>

        )}
      
        </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;