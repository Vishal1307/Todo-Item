import React from 'react'
import {store} from "../redux/store"
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {useLocation,Navigate} from "react-router-dom"

const ReqAuth = ({children}) => {
    const {isAuth}=useSelector((store)=>store.auth)
    const loaction=useLocation()
    if(!isAuth){
        return <Navigate to="/login" state={{form:loaction}} />
    }
    return children
 
}

export default ReqAuth