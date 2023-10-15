import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import NavTop from "./navtop";
import "./navbar.css";
import Books from "../db";
import User from "../user/user";
import useSticky from "./useSticky";

const Navbar = ({ user, setUser }) => {
  const [cartnum, setCartNum] = useState([]);
  const [wishcount, setWishCount] = useState();

  const { sticky, stickyRef } = useSticky();

  useEffect(() => {
    const cartBooks = Books.filter((element) => element.isInCart === true);
    const wishlistBooks = Books.filter((element) => element.wishlist === true);
    setCartNum(cartBooks);
    setWishCount(wishlistBooks.length);
  }, [cartnum]);

  return (
    <>
      <NavTop ref={stickyRef} sticky={sticky} />
      <nav
        ref={stickyRef}
        className={
          sticky
            ? "sticky navbar navbar-expand-lg  navbar-light shadow"
            : "navbar navbar-expand-lg  navbar-light shadow"
        }

        id="nvv"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand text-danger logo h1 align-self-center"
            to={"/"}
          >
            BOOK<span className="text-black">HUB</span>
          </Link>

          <div
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars-staggered"></i>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav"></div>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="navbarNav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-lg-inline-flex  mx-lg-5">
                {user === "admin" ? (
                  <li className="nav-item mx-lg-4">
                    <Link className="nav-link" to={"/admin"}>
                      Home page
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item mx-lg-4">
                      <Link className="nav-link" to={"/allbooks"}>
                        All Books
                      </Link>
                    </li>

                   
                    <li className="nav-item mx-lg-4">
                      <Link className="nav-link" to={"./libmangemnt"}>
                        Yours Library
                      </Link>
                    </li>
      

                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href={"http://localhost:3456/"}>
                        My Shelf
                      </a>
                    </li>

                    <li className="nav-item mx-lg-4">
                      <a className="nav-link" href={"http://localhost:5173/"}>
                        Book bridge
                      </a>
                    </li>

                    <li className="nav-item mx-lg-4">
                      <Link className="nav-link" to={"/aboutus"}>
                        About us
                      </Link>
                    </li>

                    <li className="nav-item mx-lg-4">
                      <Link
                        className={wishcount > 0 ? "nav-link" : "nav-link"}
                        to={"/wishlist"}
                      >
                        My Booklist{" "}
                        <i
                          className={
                            wishcount > 0
                              ? "fas fa-heart text-danger"
                              : "far fa-heart"
                          }
                        ></i>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="nav-item  mt-2">
              <NavLink
                className="nav-icon position-relative text-decoration-none"
                to={"./shoppingcart"}
              >
                <i className="fa fa-fw fa-smile text-dark" />
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  10
                </span>
              </NavLink>
              <div className="d-inline-flex">
                {user ? (
                  <User user={user} setUser={setUser} />
                ) : (
                  <NavLink
                    className="nav-icon position-relative text-decoration-none mx-5"
                    to={"./signin"}
                  >
                    <i className="fa fa-fw fa-user text-dark mr-3" />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
