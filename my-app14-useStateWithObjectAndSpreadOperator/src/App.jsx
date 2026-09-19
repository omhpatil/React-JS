import { useState } from 'react'

function App() {
  const [allValues, setValues] = useState({firstName: "Om", lastName:"Patil"})
  function update(){
    setValues({...allValues, firstName:"Shiv"})
  }

  return (
    <>
      <h3>My firstname is {allValues.firstName} and lastname is {allValues.lastName}</h3>
      <button onClick={update}>Update</button>
    </>
  )
}

export default App