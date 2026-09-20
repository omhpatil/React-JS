import { useState } from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter1/>
    <Counter2/>
    </>
  )
}

export default App
