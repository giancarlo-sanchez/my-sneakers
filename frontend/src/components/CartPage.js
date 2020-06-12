import React, { useEffect } from 'react'
import {addCart} from '../actions/addToCart'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/addToCart'



function CartPage(props){


    const addToCart = useSelector(state => state.addToCart)

    const {cartItems} = addToCart;

    const dispatch = useDispatch();

    const removeItemFromCartHandler= (sneakerId)=>{
        dispatch(removeFromCart(sneakerId))
    }

    const checkOutHandler = ()=>{
        props.history.push('/signin?redirect=shipping')
    }

    let index =  props.match.params.id;
    let query = props.location.search;
    const size = query? Number(query.split("=")[1]): 8;


    useEffect(()=>{
        if(index){
            dispatch(addCart(index, size))
        }
    },[])

    return <div className="cart">
        <div className="back-to-home"><Link to="/">Back to Home page</Link></div>
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>

                </li>
                {
                    cartItems.length === 0? <div>The Cart is Empty</div>:cartItems.map(item =><li><div className="cart-image">

                        <img src={item.image} alt="item-in-cart" />
                        </div>
                        <div >
                            <div className="cart-name">
                               <div>
                                   <Link to={`/sneakers/${item.sneakerId}`}>{item.name}</Link>
                                </div>
                            </div>
                            <div>
                                Size:
                                <select value={item.size} onChange={(e) => dispatch(addCart(item.product, e.target.value))}>
                                    <option value="8">8</option>
                                    <option value="8.5">8.5</option>
                                    <option value="9">9</option>
                                    <option value="9.5">9.5</option>
                                    <option value="10">10</option>
                                    <option value="10.5">10.5</option>
                                </select>
                                <button className="cart-remove" onClick={()=>removeItemFromCartHandler(item.sneakerId)}>X</button>
                            </div>
                            <div className="cart-price">price ${item.price}</div>
                        </div>

                </li>)
                }

            </ul>

        </div>
        <div className="cart-action">
                <h3>
                    SubTotal ${cartItems.reduce ((a,c) => a + c.price, 0)}
                </h3>
                <button onClick={checkOutHandler} className="button-add-cart" disabled={cartItems.length === 0}>
                    Checkout
                </button>
        </div>
    </div>

}

export default CartPage;
