import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsPersonCircle, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  let navigate = useNavigate();
  const [isDropDown, setDropDown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!isDropDown);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload(false);
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Auction House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/drawing">
                      Drawing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/painting">
                      Painting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photographic">
                      Photographic Images
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sculptures">
                      Sculptures
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/carvings">
                      Carvings
                    </Link>
                  </li>
                </ul>
              </li>
              {localStorage.getItem('isAdmin')  === 'true' ?
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    About Us
                  </Link>
                </li>}
              {/* {localStorage.getItem('Seller')  === 'true' ?
                <li className="nav-item">
                  <Link className="nav-link" to="/auctionpanel">
                    Create Auction
                  </Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>} */}
            </ul>

            <form
              className="d-flex mx-auto "
              style={{ width: "40rem", margin: "1px" }}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary mx-3"
                    style={{ width: "4rem" }}
                    type="button"
                  >
                    <BsSearch />
                  </button>
                </div>
              </div>
            </form>


            {!localStorage.getItem('login') ? <form className="d-flex" role="search">
              <Link to="/login" className="btn btn-outline-success mx-3 mt-2" type="submit">LogIn</Link>
              <Link to="/signup" className="btn btn-outline-success mt-2" type="submit">SignUp</Link>
            </form> : <div className="dropdown">
              <button
                style={{ width: "8rem", marginRight: "3rem" }}
                onClick={toggleDropDown}
              >
                <BsPersonCircle style={{ width: "rem" }} />
                <BsChevronDown />
              </button>
              <ul
                className={`dropdown-menu ${isDropDown ? "show" : ""
                  }`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>}





          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
