import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';


function PlaceOrderPage(props) {

  const  userSignin = useSelector(state => state. userSignin);
  const addToCart = useSelector(state => state.addToCart);
  const orderCreate = useSelector(state => state.orderCreate);
  console.log("this is orderCreate:",orderCreate);
  const { loading, success, error, order } = orderCreate;
  const {userInfo} = userSignin;
  console.log("this is user info:",userInfo)

  let userId = userInfo.user.id;


  const { cartItems, shipping, payment } = addToCart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  let listIds = []
  const shippingDetails = `${shipping.address},${shipping.city},${shipping.country}`;
  const paymentDetails = payment.paymentMethod;
  cartItems.forEach(item => {listIds.push(item.sneakerId)});
  let arrayIds = listIds.join(',');
  console.log("This is my array of ids:",arrayIds);
  console.log("This is my list of ids:",listIds);
  console.log("This is my cart:",cartItems);
  console.log("This is my user Id:",parseInt(userId));
  console.log("This is my shipping:",shippingDetails);
  console.log("This is my paymentDetails:",paymentDetails);



  const itemsPrice = cartItems.reduce((a, c) => a + c.price, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  userId = parseInt(userId)

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({userId, arrayIds, shippingDetails, paymentDetails, itemsPrice, shippingPrice,
      taxPrice, totalPrice}));
  }
  useEffect(() => {
    if (success) {
      props.history.push("/confirmation/");
    }

  }, [success]);

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Shipping
          </h3>
          <div>
            {addToCart.shipping.address}, {addToCart.shipping.city},
          {addToCart.shipping.postalCode}, {addToCart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {addToCart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
          </h3>
              <div>
                Price
          </div>
            </li>
            {
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
            }
          </ul>
        </div>


      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>${itemsPrice}</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </li>
          <li>
            <div>Tax</div>
            <div>${taxPrice}</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>${totalPrice}</div>
          </li>
        </ul>



      </div>

    </div>
  </div>

}

export default PlaceOrderPage;
