import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../component/Auth/Login'
import Signup from '../component/Auth/SignUp'
import Todo from '../component/Todo/todo'
import Home from './Home'
import ReqAuth from './ReqAuth'
import { Stack } from '@chakra-ui/react'
import SerchItem from '../component/SerchBox/SerchItem'
import Otp from '../component/otp/otp'

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<ReqAuth>
          <Stack direction="row"><Home/></Stack>
        </ReqAuth>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Todo" element={<Todo/>}></Route>
        <Route path="/serch" element={<SerchItem/>}></Route>
        <Route path="/otp" element={<Otp/>}></Route>
    </Routes>
  )
}

export default AllRoute