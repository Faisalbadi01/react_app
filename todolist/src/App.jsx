import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './Component/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Todolist/>
    </>
  )
}

export default App
