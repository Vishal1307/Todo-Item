import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import {Container} from "@chakra-ui/react"
import Todo from './component/Todo/todo'
import AllRoute from './page/AllRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AllRoute/>
    </div>
  )
}

export default App
