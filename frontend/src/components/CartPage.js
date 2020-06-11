import React, { useEffect } from 'react'
import {addToCart} from '../actions/addToCart'
import {useDispatch} from 'react-redux'



function CartPage(props){
    let index =  props.match.params.id;
    let query = props.location.search;
    const size = query? Number(query.split("=")[1]): 8;

    const dispatch = useDispatch();
    useEffect(()=>{
        if(index){
            dispatch(addToCart(index, size))
        }
    },[])

    return <div>
        Cart Page
    </div>

}

export default CartPage;
