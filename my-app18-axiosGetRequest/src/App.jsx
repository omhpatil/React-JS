import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [userData, setData] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
  }, [])

  return (
    <>
      <h3>Axios Tutorial
        {
          userData.map((data)=>{
            return(
            <div>{data.name}</div>
            )
          })
        }
      </h3>

    </>
  )
}

export default App