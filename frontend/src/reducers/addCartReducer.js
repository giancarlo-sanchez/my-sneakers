import {  ADD_TO_CART_SUCCESS,  ADD_TO_CART_FAIL } from "../constants/sneakerConstants";

function addToCartReducer(state = { cartItems:[] }, action){
    switch (action.type){
        case  ADD_TO_CART_SUCCESS:
            const item = action.payload;
            return { cartItems: [...state.cartItems, item] };
            case   ADD_TO_CART_FAIL:
                return {loading: false, error: action.payload};
            default:
                return state;
}
}

export default addToCartReducer;
