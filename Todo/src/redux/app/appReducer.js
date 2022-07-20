import { TODO_REQUEST_METHOD,TODO_SUCESS_METHOD,TODO_FAILURE_METHOD } from "./actionType"

const init={
    isLoading:false,
    isError:false,
    todo:[]

}

export const todoReducer=(store=init,{type,payload})=>{
    switch(type){
        case TODO_REQUEST_METHOD:
            return {...store,isLoading:true}
        case TODO_SUCESS_METHOD:
            return {...store,isLoading:false,todo:payload}
        case TODO_FAILURE_METHOD:
            return {...store,isError:true}
        default:
            return {...store}

    }

}