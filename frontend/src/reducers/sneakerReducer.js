import { SNEAKER_LIST_REQUEST, SNEAKER_LIST_SUCCESS, SNEAKER_LIST_FAIL } from "../constants/sneakerConstants";



function sneakerListReducer(state = { sneakers:[] }, action){
    switch (action.type){
        case SNEAKER_LIST_REQUEST:
            return {loading: true};
        case SNEAKER_LIST_SUCCESS:
            return {loading: false, sneakers: action.payload};
        case SNEAKER_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default sneakerListReducer;
