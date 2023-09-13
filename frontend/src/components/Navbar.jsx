import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
    window.location.reload(false);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Auction House</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Categories</a></li>
                  <li><a className="dropdown-item" href="#">Collections</a></li>
                  <li><a className="dropdown-item" href="#">Watch List</a></li>
                  <li><a className="dropdown-item" href="#">Item for Sale</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Setting</a>
              </li>
            </ul>

            {/* Centered Search Bar */}
            <form className="d-flex mx-auto " style={{ "width": "40rem", margin: "1px" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" style={{"width": "4rem"}} type="button">
                    <BsSearch />
                  </button>
                </div>
              </div>
            </form>

            {!localStorage.getItem('token') ?
              <form className="d-flex" role="search">
                <Link className="btn btn-outline-success mx-1" to="/login">LogIn</Link>
                <Link className="btn btn-outline-success mx-1" to="/signup">SignUp</Link>
              </form> : <button onClick={handleLogout} className="btn btn-outline-success mx-1">Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
