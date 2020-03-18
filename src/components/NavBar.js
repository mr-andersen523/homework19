import React from "react";
import SearchBar from "./SearchBar";

function NavBar(component) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <span><i className="far fa-address-book" style={{color:"white", fontSize:40, padding:10}}></i></span>
  <a className="navbar-brand" href="/"> Company Employee Directory</a>

<SearchBar />

</nav>

  );
}

export default NavBar;
