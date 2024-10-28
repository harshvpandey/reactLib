import Greet from "../components/greet";
import Add from "../components/add";
import Basic from "../components/basic";
import UserList from "../components/UserList";
function App(){

  //type rafce to get the template
  //one parent is only allowed from one return statement
  //have to close all the html tags
  //to add class you need to add classname 
  //JSX is javascript XML

  //done till 1:05 mins
  return (
    <div>
    <Greet></Greet>
    <Add></Add>
    <Basic></Basic>
    <UserList></UserList>
    </div>
    
  );
  
};
export default App;