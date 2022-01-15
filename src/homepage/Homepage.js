import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

function Homepage() {
  
  return (
    <div className="Homepage">
      <h1>Aim Train</h1>
      <p>First person shooter aim trainer.</p>
      <Link className="btn btn-success" to="/aim">Aim Here!</Link>
    </div>
  );
}

export default Homepage;
