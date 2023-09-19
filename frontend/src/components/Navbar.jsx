import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsPersonCircle, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  let navigate = useNavigate();
  const [isDropDown, setDropDown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!isDropDown);
  };

  useEffect(() => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error checking login status:", error);
      });
  }, []);


  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          setDropDown(false);
          setLoggedIn(false);
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };


  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // const checkLoginStatus = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/login", {
  //       method: "POST",
  //       credentials: "include",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setLoggedIn(data.success);
  //       console.log(data)
  //       console.log("Login True")
  //       console.log(data.success)
  //       console.log(setLoggedIn)
  //     } else {
  //       setLoggedIn(false);
  //       console.log("Login False")
  //     }
  //   } catch (error) {
  //     console.error("Error checking login status:", error);
  //   }
  // };


  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/logout", {
  //       method: "GET",
  //       credentials: "include",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.success) {

  //         console.log(data.success)

  //         setDropDown(false);
  //         setLoggedIn(false);
  //         navigate("/login");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //   }
  // };



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
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
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

            {!loggedIn ? (
              <div className="d-flex">
                <Link className="btn btn-outline-success mx-1" to="/login">
                  LogIn
                </Link>
                <Link className="btn btn-outline-success mx-1" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="dropdown">
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
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
