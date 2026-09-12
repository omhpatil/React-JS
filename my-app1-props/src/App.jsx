import { useState } from 'react'
import Header from './assets/Header'
import Header2 from './assets/Header2'
import User from './assets/User.jsx'
import PropsDestructuring from './assets/PropsDestructuring.jsx'

function App() {
  const [count, setCount] = useState(0)
  const number = 5;

  return (
    <>
      <Header name="Jay" />
      <Header name="Shiv" />
      <Header name="Om" />

      <Header2 age={25}/>

      <User name="Ram" age={25} location="Ayodhya"/>

      <PropsDestructuring name="Om" age={25} location="Pune"/>

      <i>{number < 10 ? "Number is greater" : "Number is not greater"}</i>
    </>
  )
}

export default App
