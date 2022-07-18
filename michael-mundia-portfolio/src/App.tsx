import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar/Navbar';
import Homepage from './components/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
