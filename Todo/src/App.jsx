import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import {Container} from "@chakra-ui/react"
import Todo from './component/Todo/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Todo/>
    </div>
  )
}

export default App
