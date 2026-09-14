import { useState, useCallback} from 'react'
import ChildA from './ChildA.jsx'

function App() {
  const [count, setCount] = useState(0)
  const[add, setAdd] = useState(0)

  const Learning = useCallback(() => {
    console.log("Learning useCallback")
  }, [add])

  return (
    <>
    <ChildA Learning ={Learning} add={add} />
      <h1>Learning useCallback</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Addition</button>
      <h2>Add: {add}</h2>
      <button onClick={() => setAdd(add + 1)}>Add</button>
    </>
  )
}

export default App

// here we are using useCallback hook to memoize the Learning function, so that it is not recreated on every render of the App component. The Learning function will only be recreated when the add state changes. This helps in optimizing performance by preventing unnecessary re-renders of the ChildA component, which is wrapped with React.memo.