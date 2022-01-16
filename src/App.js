import './App.css';
import { BrowserRouter, NavBar } from 'react-router-dom'
import UserContext from './auth/UserContext';
import { useState, useEffect } from 'react';
import Routes from './routes-nav/Routes';
import Navigation from './routes-nav/Navigation';

function App() {
  const [currUser, setCurrUser] = useState(null)
  
  return (
      <BrowserRouter>
        <UserContext.Provider value={currUser}>
          <div className="App">
            <Navigation/>
            <main>
            <Routes />
            </main>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
