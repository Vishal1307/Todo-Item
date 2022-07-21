import { TODO_REQUEST_METHOD,TODO_SUCESS_METHOD,TODO_FAILURE_METHOD, DELETE_REQUEST_METHOD,DELETE_SUCESS_METHOD,DELETE_FAILURE_METHOD, UPDATE_REQUEST_METHOD,UPDATE_FAILURE_METHOD,UPDATE_SUCESS_METHOD } from "./actionType";
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
export const delRequest=(payload)=>({
    type:DELETE_REQUEST_METHOD,
    payload
})
export const delSucess=(payload)=>({
    type:DELETE_SUCESS_METHOD,
    payload
});
export const delFailure=()=>({
    type:DELETE_FAILURE_METHOD,
    payload

})
export const updateRequest=(payload)=>({
    type:UPDATE_REQUEST_METHOD
})
export const updataSucess=(payload)=>({
    type:UPDATE_SUCESS_METHOD,
    payload

})
export const updataFailure=(payload)=>({
    type:UPDATE_FAILURE_METHOD,
    payload
})
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
export const delData=(payload)=>{
    return (dispatch)=>{
        dispatch(delRequest())
        axios.delete(`http://localhost:3002/todos/${payload}`).then(dispatch(getTodo())).catch((err)=>{
            dispatch(delFailure(err))

        })
    }
}
export const updataData=(payload) => {
    return (dispatch)=>{
        dispatch(updateRequest())
        axios.patch(`http://localhost:3002/todos/${payload}`,payload).then(dispatch(getTodo())).catch((err)=>updataFailure(err))
    }
}