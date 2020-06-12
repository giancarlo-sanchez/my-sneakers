import { ADD_TO_CART_SUCCESS, REMOVE_FROM_CART} from "../constants/sneakerConstants";
import axios from "axios";
import Cookie from 'js-cookie';



const addCart = (sneakerId, size) => async(dispatch, getState) =>{
    try{
        const {data} = await axios.get('/sneakers/'+ sneakerId);
        dispatch({type: ADD_TO_CART_SUCCESS, payload:{
            sneakerId: data.sneaker.id,
            name: data.sneaker.name,
            image: data.sneaker.imageSmall,
            price: data.sneaker.price,
            size
        }
    })
    const { addToCart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));


    }catch(error){

        }

}
const removeFromCart = (sneakerId) => (dispatch, getState) =>{
    dispatch({type: REMOVE_FROM_CART, payload:sneakerId});

     const { addToCart: { cartItems } } = getState();
     Cookie.set("cartItems", JSON.stringify(cartItems));
}

export {removeFromCart }

export {addCart}
