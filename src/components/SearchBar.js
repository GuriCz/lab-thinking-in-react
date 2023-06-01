function SearchBar(products) {
  return (
    <div>
      <input type="text" placeholder="Search" onChange={ event => products(event.target.value) }/>
    </div>
  );
}

export default SearchBar;
