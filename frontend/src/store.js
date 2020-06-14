import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import sneakerListReducer from './reducers/sneakerReducer';
import sneakerDetailsReducer from './reducers/detailsReducer';
import addToCartReducer from './reducers/addCartReducer';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { userSigninReducer, userRegisterReducer } from './reducers/userSessionReducer';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { addToCart: {cartItems, shipping: {}, payment: {}}, userSignin:{userInfo} };
const reducer = combineReducers({
    sneakerList: sneakerListReducer,
    sneakerDetails: sneakerDetailsReducer,
    addToCart: addToCartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: myOrderListReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;
