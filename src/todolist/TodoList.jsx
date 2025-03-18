import { Todo } from "./Todo";

export default function TodoList(){
  const data = [
    {
      id: 0,
      text: "Learn Html",
      isCompleted : true
    },
    {
      id: 1,
      text: "Learn css",
      isCompleted: true
    },
    {
      id: 2,
      text: "Learn javascript",
      isCompleted: true
    },
    {
      id: 3,
      text: "Learn reactjs",
      isCompleted: false
    },
    {
      id: 4,
      text: "Learn reactjs router",
      isCompleted: false
    },
    {
      id: 5,
      text: "Learn reactjs redux",
      isCompleted: false
    }
    
  ]

  return(
    <ul>
      {data.map((todo)=>(
        <Todo key={todo.id} {...todo}/>
      ))}
    </ul>
  );
}