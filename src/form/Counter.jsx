import { useState } from "react";

export default function Counter(){
  const [counter, setCounter] = useState(0);

  function handleClick(){
    setCounter(counter + 1);
  }
  return(
    <div>
      <div>
        <button onClick={handleClick}>Tambah</button>
      </div>
      <h1>Kamu mencintainya berapa: {counter}x</h1>
    </div>
  )
}