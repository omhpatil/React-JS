import useCounter from "./useCounter";

function Counter1() {

  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter1;