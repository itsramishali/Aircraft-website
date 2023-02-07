import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
