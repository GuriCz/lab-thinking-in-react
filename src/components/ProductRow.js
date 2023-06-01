import React from "react";

function ProductRow({name, price, inStock}){
    console.log("inStock:", inStock);
    function getCellStyle() {
        return {
          color: inStock ? "black" : "red",
        };
      }
    

    return (
        <tr>
            <td style={getCellStyle()}>{name}</td>
            <td style={getCellStyle()}>{price}</td>
        </tr>
      );
} 

export default ProductRow;
