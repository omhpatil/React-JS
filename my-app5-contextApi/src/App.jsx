import { createContext } from 'react'
import ChildA from './ChildA.jsx';

const data1 = createContext();
const data2 = createContext();

function App() {

  const name = "Om";
  const age = 25;
  return (
    <>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <ChildA />
        </data2.Provider>
      </data1.Provider>
    </>
  )
}

export default App
export { data1, data2 }