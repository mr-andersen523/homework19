import React from "react";

function SearchBar(component) {
return (
<ul className="navbar-nav ml-auto ">
<form className="form-inline my-2 my-lg-0 px-lg-5" >
    <input className = "form-control mr-sm-3 my-sm-2" id="searchBar" type="search" placeholder="Search Employees" aria-label="Search" style={{width: 500}}></input>
    <button className  ="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
</form>
</ul>

);
}

export default SearchBar;

