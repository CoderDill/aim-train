import './App.css';
import {BrowserRouter, NavBar} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <UserContext.Provider value={currUser}>
          <div className="App">
            <NavBar />
            <main>
              <Routes />
            </main>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
