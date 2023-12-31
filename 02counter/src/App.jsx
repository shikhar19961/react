import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add = ()=>{
    setCount(count+1)
  }
  const remove = ()=>{
    
    setCount(count-1)
  }
  return (
    <>
     <h1>Chai or react</h1>
     <h1>Counter : {count}</h1>
     <button onClick={add}>Add</button>&nbsp;
     <button onClick={ count>0 && remove}>Sub</button>
    </>
  )
}

export default App
