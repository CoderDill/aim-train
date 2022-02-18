import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

function Navigation({ logout }) {
  const { currUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currUser);

  function loggedInNav() {
    return (
      <div className="signedIn">
        <NavLink className="nav-link" to="/aim">
          Train
        </NavLink>

        <Link className="nav-link" to="/" onClick={logout}>
          Log out
        </Link>
      </div>
    );
  }

  function loggedOutNav() {
    return (
      <div className="signedOut">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>

        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <nav>
      <Link
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "green",
          fontSize: 20,
          paddingLeft: ".5em",
        }}
        className="navbar-brand"
        to="/"
      >
        Aim Train
      </Link>
      {currUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;
