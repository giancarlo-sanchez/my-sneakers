import React from 'react';
import {Component} from 'react'
import './index.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import CartPage from './components/CartPage';
import LoginPanel from './components/LoginPanel';
import SignUpPanel from './components/SignUpPanel';
import ShippingPage from './components/ShippingPage';
import PaymentPage from './components/PaymentPage';
import { useSelector } from 'react-redux';
import PlaceOrderPage from './components/PlaceOrderPage';
import ConfirmationPage from './components/ConfirmationPage';
import OrderRecords from './components/OrderRecords';

function App(){

  const userSignin = useSelector(state =>state.userSignin);
  const { userInfo } = userSignin;
  console.log("this is user info",userInfo)

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
                    <a href="cart.html">Cart   </a>
                    {userInfo ? <Link to="/profile">Welcome {userInfo.user.firstName}</Link>: <Link to="/signin">Sign In</Link>}


                </div>
            </header>
            <aside className="sidebar">
                <h3>Our Brands</h3>
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
                <Route path="/signin" exact={true} component={LoginPanel}/>
                <Route path="/register" exact={true} component={SignUpPanel}/>
                <Route path="/shipping" component={ShippingPage} />
                <Route path="/payment" component={PaymentPage} />
                <Route path="/placeorder" component={PlaceOrderPage} />
                <Route path="/records" component={OrderRecords} />
                <Route path="/confirmation" component={ConfirmationPage} />
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
