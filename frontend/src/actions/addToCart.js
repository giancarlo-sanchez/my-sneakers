import { ADD_TO_CART_SUCCESS,ADD_TO_CART_FAIL} from "../constants/sneakerConstants";
import axios from "axios";

const addToCart = (sneakerId, size) => async(dispatch) =>{
    try{
        const {data} = await axios.get('/sneakers/'+ sneakerId);
        dispatch({type: ADD_TO_CART_SUCCESS, payload:{
            sneakerId: data.sneaker.id,
            name: data.sneaker.name,
            image: data.sneaker.imageSmall,
            price: data.sneaker.price,
            size
        }})
        }catch(error){
            dispatch({type: ADD_TO_CART_FAIL, payload:error.message})
        }

}

export {addToCart}
