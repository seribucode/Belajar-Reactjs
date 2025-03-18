import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchFrom";
import SayHello from "../form/SayHello";
import Counter from "../form/Counter";


createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <Container>
        <HelloWorld/>
        <TodoList/>
        <Table/>
        
        <AlertButton text={"Apa yg ingin kamu katakan?"} message={"I love you sayangkuuhhh"}/>
        <MyButton text={"Nikah yuk!"} onSmash={()=> alert("Gasssss!")}/>
        <Toolbar onClick={(e)=>{
          e.stopPropagation();
          alert("You make love");
        }}/>
        <SearchForm/>
        <SayHello/>
        <Counter/>
      </Container>
    </StrictMode>
  )