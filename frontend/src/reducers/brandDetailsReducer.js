import { DETAIL_BRAND_REQUEST,  DETAIL_BRAND_SUCCESS,  DETAIL_BRAND_FAIL } from "../constants/brandConstants";



function brandDetailsReducer(state = { sneaker:[] } , action){
    switch (action.type){
        case  DETAIL_BRAND_REQUEST:
            return {loading: true};
        case  DETAIL_BRAND_SUCCESS:
            return {loading: false, sneaker: action.payload};
        case  DETAIL_BRAND_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default brandDetailsReducer;
