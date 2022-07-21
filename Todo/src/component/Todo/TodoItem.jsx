import React from 'react'
import { Button ,Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux/es/exports'
import { delData } from '../../redux/app/action'

const TodoItem = ({cv1}) => {
  const dispatch=useDispatch()
  return (
    <Box>
        <h1>{cv1.item}</h1>
        <Button onClick={()=>{
          dispatch(delData(cv1.id))
          
        }}>Del</Button>
    </Box>
  )
}

export default TodoItem