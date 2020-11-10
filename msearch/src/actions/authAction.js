import axios from 'axios';
import {returnErrors} from './errorAction'
import{
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADING,
    USER_LOADED
} from "./types";

export const loadUser = () => (dispatch,getState) =>{
     dispatch({type:USER_LOADING})

    
     axios
         .get('/api/auth/user', tokenConfig(getState))
         .then(res=>dispatch({
            type:USER_LOADED,
            payload:res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status))
            dispatch({
                type:AUTH_ERROR
            }
            )
        })
 }
 export const login=({email,password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
}
    }
    const body = JSON.stringify({email,password})
    axios.post('/api/auth', body,config)
        .then(res => dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        }
        ))
        .catch(err=>{
            dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL '))
            dispatch({
                type:LOGIN_FAIL
            })
        })
}

 
export const register=({name,email,password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
}
    }
    const body = JSON.stringify({name,email,password})
    axios.post('/api/user', body,config)
        .then(res => dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        }
        ))
        .catch(err=>{
            dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL '))
            dispatch({
                type:REGISTER_FAIL
            })
        })
}

export const logout =()=>
{
    return{
        type:LOGOUT_SUCCESS  
      }
}



 export const tokenConfig=getState=>{
    const token = getState().auth.token;
   
    const config={
        headers:{
          'Content_type':'application/json'
       }
}
   if(token){
         config.headers['x-auth-token'] = token
    }
    return config
 }