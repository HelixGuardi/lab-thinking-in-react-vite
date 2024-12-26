import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {

  const [searchValue, setSearchValue] = useState("");

  
  const filteredProducts = jsonData.filter((eachProduct) => 
    eachProduct.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
