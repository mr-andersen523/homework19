import React from "react";

function NavTabs(props) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <img src="../../public/Staff-Directory.png" height="30px" width="30px" alt="" ></img>
  <a className="navbar-brand" href="/">Employee Directory</a>

  <ul class="navbar-nav ml-auto">
  <form className="form-inline my-2 my-lg-0 " >
      <input className ="form-control mr-sm-3 my-sm-2" type="search" placeholder="Search Employees" aria-label="Search"></input>
      <button className  ="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
    </ul>
</nav>

  );
}

export default NavTabs;
