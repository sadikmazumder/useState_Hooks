import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const isDisabled = count === 0;
  const inDisabled = count === 10;

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>useState Hooks</h1>
      <h1>{count}</h1>

      <button onClick={increment} disabled={inDisabled}>
        {" "}
        +
      </button>
      <button onClick={reset}> Reset</button>
      <button onClick={decrement} disabled={isDisabled}>
        -
      </button>
    </div>
  );
}
