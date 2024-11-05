import React, { useState } from 'react'
import { useContext } from 'react';
import { Data } from '../src/App';
const ToDoList = () => {
  //receiveing data
  const name=useContext(Data);
  const [todos,setTodos]=useState([]);
  const [sharedData, setSharedData] = useState("Initial Data");
  
  

  const [inputValue,setInputValue]=useState('');
  return (
    <div>
    {/* this is how you receive data */}
    <h1>this is from useContext {name}</h1>
    
    <h1>To do List</h1>
    <form>
    <ComponentA setSharedData={setSharedData} />
     <ComponentB sharedData={sharedData} />
    </form>

    </div>
  )
}




function ComponentA({ setSharedData }) {
  const handleChange = (event) => {
    // Step 3: Update the state from ComponentA
    setSharedData(event.target.value);
  };

  return (
    <div>
      <h2>Component A</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
}

function ComponentB({ sharedData }) {
  return (
    <div>
      <h2>Component B</h2>
      {/* Step 4: Display the shared data */}
      <p>Data from Component A: {sharedData}</p>
    </div>
  );
}



export default ToDoList