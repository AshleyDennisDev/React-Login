import { useState } from 'react';
import './App.css';

function App() {
  const [login, setLoggedIn] = useState(false);
  return(
    <div className="App">
      <header className="App-header">
        {login && <h1>Welcome Back!</h1>}
        {!login &&<h1>Please Login </h1>}
        <button
        onClick={() => setLoggedIn(true)}
        > Login </button>
        &nbsp;
        <button
        onClick={() => setLoggedIn(false)} 
        >Logout</button>
        &nbsp;
        
      </header>
    </div>
  );
      }
export default App;
