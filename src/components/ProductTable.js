import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} inStock={product.inStock} name={product.name} price={product.price} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
