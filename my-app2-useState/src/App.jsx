import { useState } from 'react'
import Login from './assets/Login';

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count +1);
  }

  function decrement(){
    setCount(count-1);
  }

  return (
  <>
    <Login />
    <h1>Count is: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </>
  )
}

export default App