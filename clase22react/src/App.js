import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import React from 'react';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';



function App() {
  return (
    <div className="App">

      <Header />
      {/* <Header/> tambien funciona como forma simplificada*/}
      <BrowserRouter>
        <Nav />
        <Routes>
         <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
