import Greet from "../components/greet";
import {Password,Add} from "../components/add";
import Basic from "../components/basic";
import UserList from "../components/UserList";
import MapTry from "../components/mapTry";
import { Bs0CircleFill } from "react-icons/bs";
function App(){

  //type rafce to get the template
  //one parent is only allowed from one return statement
  //have to close all the html tags
  //to add class you need to add classname 
  //JSX is javascript XML

  //done till 1:22 mins
  //props are properties that help transfer data from parent to child

  //topics covered 
  //1.props 
  //2.conditional rendering
  //to use icons you can install from react-icons : npm install react-icons --save
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
    </div>
    
  );
  
};
export default App;