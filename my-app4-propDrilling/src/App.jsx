import ChildA from './ChildA';

function App() {
  const name = "Om"
  return (
    <>
      <ChildA name={name} />
    </>
  )
}

export default App

// this is a simple React application that demonstrates prop drilling. The `App` component defines a `name` variable and 
// passes it down to the `ChildA` component as a prop. The `ChildA` component then passes the `name` prop down to the `ChildB` component, 
// which in turn passes it down to the `ChildC` component. Finally, the `ChildC` component displays the name in an `<h1>` element.