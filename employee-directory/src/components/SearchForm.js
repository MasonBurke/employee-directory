import React from "react";




function SearchForm(handleSearchChange) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={e => handleSearchChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
