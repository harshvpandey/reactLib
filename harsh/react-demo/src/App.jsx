import Greet from "../components/greet";
import {Password,Add} from "../components/add";
import Basic from "../components/basic";
import UserList from "../components/UserList";
import MapTry from "../components/mapTry";
import { Bs0CircleFill } from "react-icons/bs";
import React from "react";
import { useState } from "react";
import ToDoList from "../components/ToDoList";
function App(){

  //type rafce to get the template
  //one parent is only allowed from one return statement
  //have to close all the html tags
  //to add class you need to add classname 
  //JSX is javascript XML

  //done till 2:20 mins
  //props are properties that help transfer data from parent to child

  //topics covered 
  //1.props 
  //2.conditional rendering
  //to use icons you can install from react-icons : npm install react-icons --save
  //state:way to store and manage data that can change over time and it affects how components are rendered
  const counter=useState('harsh');
  const [count,setCount]=useState(0);
  //everytime we change the value using setCount our component re renders
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  //aksay saini
  const heading=React.createElement("h1",{},"This is from React Create Element");
  // const root=ReactDOM.createRoot();
  console.log(counter);
  return (
    <div>
      <Bs0CircleFill></Bs0CircleFill>
    <Greet name="Harsh" msg='this is from props'></Greet>
    {/* here name is prop */}
    <Add></Add>
    <Password isValid={true}></Password>
    <Basic></Basic>
    <UserList></UserList>
    <MapTry></MapTry>
    <section>Using States : {count}
    <br></br>
    <button onClick={increment}>+</button>
    <br></br>
    <button onClick={decrement}>-</button>
    </section>

    <section className="todo-list">
      <ToDoList></ToDoList>
    </section>
    </div>
    
  );
  
};
export default App;
