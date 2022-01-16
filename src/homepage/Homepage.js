import { Button } from "bootstrap";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import axios from "axios";
import './Homepage.css'


function Homepage() {
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    getBundles();
  }, []);

  async function getBundles() {
    let res = await axios.get("https://valorant-api.com/v1/bundles");
    console.log(res);
    setBundles(res.data.data);
  }
  return (
    <div className="Homepage">
      <h1>Aim Train</h1>
      <p>First person shooter aim trainer.</p>
      <Link className="btn btn-success" to="/aim">
        Aim Here!
      </Link>
      <div style={{ paddingTop: "5px"}}>
        {bundles.map((bundle) => (
          <img className="bundles" src={bundle.displayIcon} alt=""></img>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
