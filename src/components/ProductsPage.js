import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div className='productsPage'>
        <h1>IronStore</h1>
        <SearchBar products={products}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;