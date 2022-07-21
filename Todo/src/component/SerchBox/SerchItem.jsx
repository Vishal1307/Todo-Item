import React, { useEffect, useState } from 'react'
import SerchBox from './SerchBox'
import {useSelector,useDispatch}from "react-redux"
import { store } from '../../redux/store'
import { getTodo } from '../../redux/app/action'

const SerchItem = () => {
    const [query,setQuery]=useState("")
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const {todo}=useSelector((store)=>store.todos)
    const dispatch=useDispatch()
    // console.log(todo)
    useEffect(()=>{
        dispatch(getTodo())
        
        if(query==""){
            setData([])
        }
        else{
            const initData=todo.filter((cv)=>cv.item.toLowerCase().indexOf(query)!=-1?true:false)
            setData(initData)
        }

        setTimeout(()=>{
            setLoading(false)

        },1000)

    },[query])
  
  return (
    <div>
        <h1>Serch-Box</h1>
        <h1>Query:-{query}</h1>
        <SerchBox setQuery={setQuery} loading={loading} setLoading={setLoading} data={data} onChange={(val)=>setQuery(val)} />
    </div>
  )
}

export default SerchItem