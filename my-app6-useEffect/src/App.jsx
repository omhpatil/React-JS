import { useState, useEffect, React } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const[data, setData] = useState("Jay")

  useEffect(() => {
    console.log("useEffect called")
  }, [data])

  function updateCount() {
    setCount(count + 1)
  }

  function updateData() {
    setData("Om")
  }

  return (
    <>
    <h1>Button Clicked {count} times</h1>
    <button onClick={updateCount}>Click Me</button>
    <button onClick={updateData}>Update Data</button>
    </>
  )
}

export default App
