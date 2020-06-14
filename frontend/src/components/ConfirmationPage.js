import React, { useEffect } from 'react'
import {addCart} from '../actions/addToCart'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/addToCart'
import Cookie from 'js-cookie';
import refreshPage from '../auxFunctions/refreshPage'


function ConfirmationPage(props){
    Cookie.remove('cartItems')
    //refreshPage();
    const  userSignin = useSelector(state => state. userSignin);
    const {userInfo, loading, error} = userSignin;
    console.log("this is my user info:",userInfo)
    const userId = userInfo.user.id


    return <div className="confirmation">
        <div className="back-to-home"><Link to="/">Back to Home page</Link></div>
        <div className="placeorder-info">
            <div className="greatings-message">
            <h3>
                THANK YOU FOR USING MY SNEAKER APP!😁
            </h3>
            </div>

        <div>
          <ul className="cart-list-container">
            <li>
             <Link to={`/orders/users/${userId}`}>
              See your shopping records
              </Link>

            </li>

          </ul>
        </div>


      </div>
      <Link to="/">
        <button className="button primary">Continue Shopping</button>
        </Link>

    </div>

}

export default ConfirmationPage;
