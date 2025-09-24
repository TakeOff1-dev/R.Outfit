import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Navbar({cart}) {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  const offers = [
    {
      id: 1,
      text: "Signup to get 50% off",
      link: "/login"
    },
    {
      id: 2,
      text: "Get free delivery over R1000",
      link: "/login"
    },
    {
      id: 3,
      text: "Get 10% off your first order",
      link: "/Login"
    },
   
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === offers.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      {show && (
        <div className="offersection  ">
          <div className="container-fluid d-flex justify-content-between">
            <div className="offersection-text">
              {offers[index].text} <Link to="/Login">Login</Link>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
              ❌
            </div>
          </div>
        </div>
      )}

      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container">
          <Link className="navbar-brand" to="#">
            SHOP.CO
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  On Sale
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Shop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Contact">
                     Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Category">
                  Category
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            
              <div className="form-floating">
                                <input type="text" class="form-control" id="search" placeholder="Search"  />
                                <label for="floatingPassword">Search</label>
                            </div>
              <Link to="/Cart"><i id="icons" class="bi bi-cart"></i><p>{cart.length}</p></Link>
            <Link to="/Favorites"><i id="icons" class="bi bi-heart"></i></Link>  
              <Link to="/Profile"><i id="icons" class="bi bi-person-circle"></i></Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
