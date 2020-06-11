import React from 'react';
import {Component} from 'react'
import './index.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import CartPage from './components/CartPage';

function App(){

  const openMenu =()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return(
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button className="button-menu" onClick={openMenu}>&#9776;</button>
                    <Link to="/">My Sneakers</Link>
                </div>
                <div className="header-links">
                    <a href="sigin.html">Sign In</a>
                    <a href="cart.html">Cart</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping categories</h3>
                <button className="sidebar-close-button"onClick={closeMenu}>close</button>
                <ul>
                    <li>
                       <a href="index.html">Category 1</a>
                    </li>
                    <li>
                        <a href="index.html">Category 2</a>
                     </li>
                </ul>
            </aside>

            <main className="main">
              <div className="content">
                <Route path="/sneakers/:id" exact={true} component={DetailPage}/>
                <Route path="/cart/:id?" exact={true} component={CartPage}/>
                <Route path="/" exact={true} component={HomePage}/>
              </div>

          </main>
            <footer className="footer">This is my react Template footer</footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
