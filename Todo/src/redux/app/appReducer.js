import { TODO_REQUEST_METHOD,TODO_SUCESS_METHOD,TODO_FAILURE_METHOD, DELETE_REQUEST_METHOD, DELETE_SUCESS_METHOD,DELETE_FAILURE_METHOD, UPDATE_REQUEST_METHOD 
,UPDATE_SUCESS_METHOD,UPDATE_FAILURE_METHOD} from "./actionType"

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
        case DELETE_REQUEST_METHOD:
            return {...store,isLoading:true}
        case DELETE_SUCESS_METHOD:
            return {...store,isError:false}
        case DELETE_FAILURE_METHOD:
            return {...store,isError:true}
        case UPDATE_REQUEST_METHOD:
            return {...store,isError:false,isLoading:true}
        case UPDATE_SUCESS_METHOD:
            return {...store,isError:false,isLoading:false}
        case UPDATE_FAILURE_METHOD:
            return {...store,isError:true,isLoading:false}
        default:
            return {...store}

    }

}