import { getData, postData } from "../../utlites/localStorage"
import { LOGIN_FAIL_METHOD, LOGIN_REQUEST_METHOD, LOGIN_SUCESS_METHOD, SIGNUP_REQUEST_METHOD, SIGNUP_SUCESS_METHOD,SIGNUP_FAIL_METHOD } from "./actionType"

const init={
    isAuth:getData("token")?true:false,
    token:getData("token")||"",
    token1:getData("token1")||"",
    loading:false,
    error:false
}
export const AuthREducer=(store=init,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST_METHOD:
            return {...store,loading:true}
        case LOGIN_SUCESS_METHOD:
            postData("token",payload)
            return {...store,loading:false,token:payload,isAuth:true}
        case LOGIN_FAIL_METHOD:
            return {...store,loading:false,error:true}
        case SIGNUP_REQUEST_METHOD:
            return {...store,loading:true}
        case SIGNUP_SUCESS_METHOD:{
            postData("token1",payload)
            return {...store,loading:false,token1:payload}
        }
        case SIGNUP_FAIL_METHOD:
            return {...store,loading:false,error:true}
        default:
            return {...store}
    }
}