function SearchBar() {
  return (
    <div>
      <label>
        <p>Search</p>
        <input type="text" />
      </label>
      <div>
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
