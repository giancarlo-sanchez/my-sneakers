import { DETAIL_BRAND_SUCCESS,DETAIL_BRAND_FAIL, DETAIL_BRAND_REQUEST } from "../constants/brandConstants";
import axios from "axios";

const detailsBrand = (brandId) => async(dispatch) =>{
    try{

        dispatch({type: DETAIL_BRAND_REQUEST,payload: brandId});
        const {data} = await axios.get(`/brands/${brandId}`);
        dispatch({type: DETAIL_BRAND_SUCCESS, payload:{sneaker:data.sneaker}})
        }catch(error){
            dispatch({type: DETAIL_BRAND_FAIL, payload:error.message})
        }

}

export default detailsBrand
