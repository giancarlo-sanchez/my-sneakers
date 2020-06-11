import { DETAIL_LIST_SUCCESS,DETAIL_LIST_FAIL, DETAIL_LIST_REQUEST } from "../constants/sneakerConstants";
import axios from "axios";

const detailsSneaker = (sneakerId) => async(dispatch) =>{
    try{

        dispatch({type: DETAIL_LIST_REQUEST,payload: sneakerId });
        const {data} = await axios.get('/sneakers/'+ sneakerId);
        dispatch({type: DETAIL_LIST_SUCCESS, payload: data.sneaker})
        }catch(error){
            dispatch({type: DETAIL_LIST_FAIL, payload:error.message})
        }

}

export {detailsSneaker}
