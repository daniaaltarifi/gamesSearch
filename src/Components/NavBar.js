import React from 'react'

function NavBar({propsSearch}) {
  const handle=(event)=>{
    let query= event.target.value;
    propsSearch(query)
  }
  return (
    <div>
       <nav>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand navBarColor" href="#">
              MonesterPlay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className=" nav-link active "
                    aria-current="page"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
          <a className="nav-link navBarColor" href="#">Gamer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navBarColor" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navBarColor" href="#">Esport</a>
        </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
        <input className="searchBar" type="search" placeholder="Search" aria-label="Search" onChange={handle}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </nav>
      </nav>
    </div>
  )
}

export default NavBar