import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from '../containers/Layout'
import Air from './Air';
import Navbar from './Navbar';
// import Footer from './footer';
import Offers from './Offers';
import Contact from './Contact';
import Book from './Book';
import Home from './Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Book" element={<Book/>}/>
          <Route exact path="/Air" element={<Air/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Offers" element={<Offers/>}/>
        </Routes>
        {/* <Switch>
          <Route  path="/">
              <Home/>
          </Route>
          <Route  path="<Book/>">
              <Book/>
          </Route>
          <Route  path="">
              <Air/>
          </Route>
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
