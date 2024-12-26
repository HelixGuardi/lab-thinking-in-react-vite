function SearchBar(props) {

    // console.log(props);
    const { searchValue, setSearchValue } = props;

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }

  return (
    <div>
      <label>
        <p>Search</p>
        <input type="text" value={searchValue} onChange={handleSearch} />
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
