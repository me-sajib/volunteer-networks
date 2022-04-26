import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
            Hidden brand
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link ">
                BLOG
              </Link>
            </li>
            {user ? (
              <div className="d-flex">
                <li className="nav-item">
                  <Link to="/event" className="nav-link">
                    EVENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add" className="nav-link">
                    ADD VOLUNTEER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    ADMIN
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => logout()}
                    className="nav-link btn-link btn"
                  >
                    Log-out
                  </button>
                </li>
              </div>
            ) : (
              <li className="nav-item">
                <Link
                  to="/registration"
                  className="nav-link btn btn-primary text-white"
                >
                  Registration
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
