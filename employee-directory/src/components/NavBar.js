import React from "react";

function NavBar(component) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <span><i className="far fa-address-book" style={{color:"white", fontSize:40, padding:10}}></i></span>
  <a className="navbar-brand" href="/"> Company Employee Directory</a>

  <ul className="navbar-nav ml-auto ">
  <form className="form-inline my-2 my-lg-0 px-lg-5" >
      <input className ="form-control mr-sm-3 my-sm-2" type="search" placeholder="Search Employees" aria-label="Search" style={{width: 500}}></input>
      <button className  ="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
    </ul>
</nav>

  );
}

export default NavBar;
