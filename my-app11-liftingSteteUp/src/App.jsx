import { useState } from 'react';
import Input from './Input.jsx';
import Display from './Display.jsx';

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Input
        name={name}
        setName={setName}
      />

      <Display
        name={name}
      />
    </>
  );
}

export default App;