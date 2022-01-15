import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import './Navigation.css'

function Navigation({ logout }) {
  // const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/companies">
            Train
          </NavLink>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out
          </Link>
        </li>
      </ul>
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
    <nav className="Navigation navbar navbar-expand-md">
      <Link
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "green",
          fontSize: 20,
          paddingLeft: ".5em"
        }}
        className="navbar-brand"
        to="/"
      >
        Aim Train
      </Link>
      {loggedOutNav()}
    </nav>
  );
}

export default Navigation;