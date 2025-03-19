import { useState } from "react";

export default function TaskForm({onSubmit}){
  const [item, setItem] = useState("");
  
    function handleChange(e){
      setItem(e.target.value)
    }
  
    function handleClick(e){
      e.preventDefault();
      onSubmit(item)
      setItem("")
    }
    return(
      <div>
        <h1>Create Task</h1>
        <input value={item} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        
      </div>
    )
}