import React from "react";

function Search({searchHandler}) {
  //search plants by name and see a filtered list of plants
  //console.log(plants)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchHandler}
      />
    </div>
  );
}

export default Search;
