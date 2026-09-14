import { useState, useMemo } from 'react'

function App() {

  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

  const multiplication = useMemo(() => {
    console.log('multiplication')
    return add * 10;
  }, [add])

  return (
    <center>
      <h1>Learning useMemo</h1>
      <h2>Multiplication: {multiplication}</h2><br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span> {add} </span>
      <br />
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      <span> {minus} </span>
    </center>
  )
}

export default App

// here, we are using useMemo to memoize the result of the multiplication calculation. 
// The multiplication will only be recalculated when the 'add' state changes, which helps to optimize performance 
// by avoiding unnecessary calculations on every render.