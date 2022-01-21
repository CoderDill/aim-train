import './App.css';
import { BrowserRouter, NavBar } from 'react-router-dom'
import UserContext from './auth/UserContext';
import React, { useState, useEffect } from 'react';
import Routes from './routes-nav/Routes';
import Navigation from './routes-nav/Navigation';
import AimApi from './api/AimApi'
import useLocalStorage from "./hooks/useLocalStorage";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "aim-token";

function App() {
  const [currUser, setCurrUser] = useState(null)
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  
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

  return (
      <BrowserRouter>
        <UserContext.Provider value={currUser}>
          <div className="App">
            <Navigation/>
            <main>
            <Routes login={login} signup={signup}/>
            </main>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
