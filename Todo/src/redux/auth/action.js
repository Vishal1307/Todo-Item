import { LOGIN_REQUEST_METHOD,LOGIN_SUCESS_METHOD,LOGIN_FAIL_METHOD,SIGNUP_REQUEST_METHOD,
SIGNUP_SUCESS_METHOD,SIGNUP_FAIL_METHOD } from "./actionType";
import axios from "axios"

export const loginRequest=()=>({
    type:LOGIN_REQUEST_METHOD
})
export const loginSucess=(payload)=>({
    type:LOGIN_SUCESS_METHOD,
    payload
})
export const loginFailure=(payload )=>({
    type:LOGIN_FAIL_METHOD,
    payload
})
export const signRequest=(payload)=>({
    type:SIGNUP_REQUEST_METHOD,
    payload
})
export const signSucess=(payload)=>({
    type:SIGNUP_SUCESS_METHOD,
    payload
})
export const signFailure=(payload)=>({
    type:SIGNUP_FAIL_METHOD,
    payload
});
export const LoginData=(payload)=>{
    return (dispatch)=>{
        dispatch(loginRequest())
        axios.post("https://reqres.in/api/login",payload).then((d)=>dispatch(loginSucess(d.data.token))).catch((err)=>console.log(err.message))
    }
}
export const RegisterData=(payload)=>{
    return (dispatch)=>{
        dispatch(signRequest())
        axios.post("https://reqres.in/api/register",payload).then((d)=>dispatch(signSucess(d.data.token))).catch((err)=>console.log(err.message))

    }
}