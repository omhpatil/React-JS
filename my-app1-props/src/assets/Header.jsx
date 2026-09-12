function Header(props) {
  console.log(props.name); // Accessing the name prop passed from the parent component
  /* props.name="John";    // This will not work as props are read-only and cannot be modified directly. */ 

  return (
    <>
      {/* <h1>Welcome to My App</h1>
      <p>Here we started learning React!</p>

      <br /> */}
      <h3>Hello, {props.name}!</h3>
    </>
  ) 
}

export default Header