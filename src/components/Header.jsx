import React from "react";

const Header = ({handleSearch}) => {
  return (
    <nav className="navbar navbar-dark bg-primary px-3 d-flex justify-content-between">
      
      {/* Title */}
      <h4 className="text-white mb-0">
        Student Management Dashboard
      </h4>

      {/* Search Bar */}
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search student..."
          aria-label="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="btn btn-light" type="submit">
          Search
        </button>
      </form>

    </nav>
  );
};

export default Header;
