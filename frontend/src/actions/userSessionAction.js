import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST} from '../constants/userConstants';
import axios from 'axios';
import Cookie from 'js-cookie'

const signin = (email,password) => async(dispatch) =>{
    dispatch({type: USER_LOGIN_REQUEST, payload:{email,password}});
    try{
        const {data} = await axios.post('/users/token', {email, password});
        dispatch({type: USER_LOGIN_SUCCESS,payload: data});
        Cookie.set("userInfo", JSON.stringify(data))
    }catch(error){
        dispatch({type: USER_LOGIN_FAIL,payload: error.message });
    }


}

const register = (username, firstName, lastName, email ,password, rePassword) => async(dispatch) =>{
    dispatch({type: USER_REGISTER_REQUEST, payload:{username, firstName, lastName, email ,password, rePassword}});
    try{
        const {data} = await axios.post('/users/', {username, firstName, lastName, email ,password, rePassword});
        dispatch({type: USER_REGISTER_SUCCESS,payload: data});
        Cookie.set("userInfo", JSON.stringify(data))
    }catch(error){
        dispatch({type: USER_REGISTER_FAIL,payload: error.message });
    }


}

export {signin, register}
