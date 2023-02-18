import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from '../containers/Layout'
// import Air from './Air';
import Navbar from './Navbar';
// import Footer from './Footer';
import Offers from './Offers';
import Contact from './Contact';
import Book from './Book';
import Home from './Home';
import About from './About';
import Membership from './Membership';
import Destination from './Destination';
import Inquire from './Inquire';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Book" element={<Book/>}/>
          {/* <Route exact path="/Air" element={<Air/>}/> */}
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Offers" element={<Offers/>}/>
          <Route exact path='/About Us' element={<About/>}/>
          <Route exact path='/Membership' element={<Membership/>}/>
          <Route exact path='/Destination' element={<Destination/>}/>
          <Route exact path='/Inquire' element={<Inquire/>}/>

          {/* <Footer /> */}
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
