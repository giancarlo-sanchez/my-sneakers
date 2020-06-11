import { DETAIL_LIST_REQUEST,  DETAIL_LIST_SUCCESS,  DETAIL_LIST_FAIL } from "../constants/sneakerConstants";



function sneakerDetailsReducer(state = { sneaker:{} }, action){
    switch (action.type){
        case  DETAIL_LIST_REQUEST:
            return {loading: true};
        case  DETAIL_LIST_SUCCESS:
            return {loading: false, sneaker: action.payload};
        case  DETAIL_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default sneakerDetailsReducer;
