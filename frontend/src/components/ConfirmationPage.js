import React, { useEffect } from 'react'
import {addCart} from '../actions/addToCart'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/addToCart'
import Cookie from 'js-cookie';


function ConfirmationPage(props){
    Cookie.remove('cartItems')
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
              <Link to="/records">
              See your shopping records
              </Link>

            </li>
            {/* {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                  <li key={item.sneakerId}>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>

                          {item.name}


                      </div>
                      <div>
                        Size: {item.size}
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                  </li>
                )
            } */}
          </ul>
        </div>


      </div>
        <button className="button primary"><Link to="/">Continue Shopping</Link></button>


    </div>

}

export default ConfirmationPage;
