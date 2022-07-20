import { TODO_REQUEST_METHOD,TODO_SUCESS_METHOD,TODO_FAILURE_METHOD } from "./actionType";
import axios from "axios";

export const todoRequest=()=>({
    type:TODO_REQUEST_METHOD,

})
export const todoSucess=(payload)=>({
    type:TODO_SUCESS_METHOD,
    payload
})
export const todoFailur=(payload)=>({
    type:TODO_FAILURE_METHOD,
    payload
});
export const postData=(payload)=>{
    return (dispatch)=>{
        dispatch(todoRequest())
        axios.post("http://localhost:3002/todos",payload).then(dispatch(getTodo()))

    }
}
export const getTodo=(payload)=>{
    return (dispatch)=>{
        dispatch(todoRequest())
        axios.get("http://localhost:3002/todos").then((d)=>dispatch(todoSucess(d.data))).catch((err)=>dispatch(todoFailur(err)))
    }
}