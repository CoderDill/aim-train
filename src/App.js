import "./App.css";
import { BrowserRouter, NavBar } from "react-router-dom";
import UserContext from "./auth/UserContext";
import React, { useState, useEffect } from "react";
import Routes from "./routes-nav/Routes";
import Navigation from "./routes-nav/Navigation";
import AimApi from "./api/AimApi";
import useLocalStorage from "./hooks/useLocalStorage";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "aim-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(
    function loadUser() {
      async function getCurrUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the Api class so it can use it to call the API.
            AimApi.token = token;
            let currUser = await AimApi.getCurrUser(username);
            setCurrUser(currUser);
          } catch (err) {
            setCurrUser(null);
          }
        }
        setInfoLoaded(true);
      }

      // set infoLoaded to false while async getCurrUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setInfoLoaded(false);
      getCurrUser();
    },
    [token]
  );

  /** Handles site-wide logout. */
  function logout() {
    setCurrUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await AimApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
  async function login(loginData) {
    try {
      let token = await AimApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <p>Loading...</p>

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        <div className="App">
          <Navigation logout={logout}/>
          <main>
            <Routes login={login} signup={signup} />
          </main>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
