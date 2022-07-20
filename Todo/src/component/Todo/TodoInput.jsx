import React, { useEffect, useState } from 'react' 
import {Button,Input} from "@chakra-ui/react"
import {useDispatch,useSelector} from "react-redux"
import { store } from '../../redux/store'
import { getTodo, postData } from '../../redux/app/action'
import TodoItem from './TodoItem'

const TodoInput = () => {
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    const {isLoading,isError,todo}=useSelector((store)=>store.todos)
    useEffect(()=>{
        if(todo.length==0){
            dispatch(getTodo())
        }
        
    },[dispatch,todo.length])
    console.log(todo,isLoading)
    
  return (
    <div>
        <Input  onChange={(e)=>setText({...text,item:e.target.value})}/>
        <Button onClick={()=>{
            dispatch(postData(text))

        }}>Add</Button>
        { todo.map((cv)=><TodoItem key={cv.id} cv1={cv}/>)}
    </div>
  )
}

export default TodoInput