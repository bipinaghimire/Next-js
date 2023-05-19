'use client'
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const name = 'Abc';
  const time = Date.now().toString();

  const handleClick = () => {
    // alert("You cliced the button")
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome to React</h1>
      <p>Today is {time}</p>
      <p>My name is {name}</p>

      <h2>You clicked {count} times.</h2>
      <button onClick={handleClick}>
        Add
      </button>
      <br></br>
      <button onClick={()=>setCount(count-1)}>
        minus
      </button>
      <br></br>
      <button onClick={()=>setCount(0)}>
        Reset
      </button>
    </div>
  );
}
