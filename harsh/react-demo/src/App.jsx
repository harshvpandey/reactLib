import Greet from "../components/greet";
import {Password,Add} from "../components/add";
import Basic from "../components/basic";
import UserList from "../components/UserList";
import MapTry from "../components/mapTry";
import { Bs0CircleFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import ToDoList from "../components/ToDoList";
import TodoListComponent from "../components/apiIntegration";
import { createContext } from "react";
import { UserProvider } from "../components/userProvider";
import UserContext from "../components/userProvider";
import PrintRandom from "../components/printRandom";
export const Data=createContext();
function App(){
  //type rafce to get the template
  //one parent is only allowed from one return statement
  //have to close all the html tags
  //to add class you need to add classname 
  //JSX is javascript XML

  //done till 3;12 hours
  //props are properties that help transfer data from parent to child

  //topics covered 
  //1.props 
  //2.conditional rendering
  //to use icons you can install from react-icons : npm install react-icons --save
  //state:way to store and manage data that can change over time and it affects how components are rendered
  //portal use karte dom k bahar koi element render karvana hoga tho 
  //portal use when css overlap nai karvana parent ka 
  const counter=useState('harsh');
  const name='harsh';
  const [count,setCount]=useState(0);
  //everytime we change the value using setCount our component re renders
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  useEffect(()=>{
    console.log('Call useEffect');
  },[count])
  //useEffect happens if anytime re rendering of component happens 
  //but as we provided [count] it will change only if component re renders because of count variable

  //context api allows to manage and share data along various components use to avoid prop drilling

  //learn about useContext more properly
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


    <Data.Provider value={name}>
    <section className="todo-list">
      <ToDoList></ToDoList>
    </section>
    {/* now name value can be passed to todolist and its child components without any prop drilling */}
    <TodoListComponent></TodoListComponent>
    </Data.Provider>
    <UserProvider>
   

     <PrintRandom></PrintRandom>

    </UserProvider>
    </div>

    
  );
  
};
export default App;