import { useRef, useState, React } from 'react'

function App() {

  const refElement = useRef("")
  const [name, setName] = useState("")
  console.log(refElement)

  function Reset() {
    setName("")
    refElement.current.focus()
  }

  function handleInput() {
    refElement.current.style.color = "blue"
  }

  return (
    <>
      <h2>Learning useRef</h2>
      <input ref={refElement} type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle Input</button>
    </>
  )
}

export default App