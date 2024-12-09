import React,{useState} from "react";


const ToDoList=()=>{

    const [tasks, setTasks] = useState([]); // List of tasks
    const [newTask, setNewTask] = useState(''); // Input value
    
    const addTask=()=>{
    newTask=newTask.trim();
    console.log(tasks)
 
    setTasks([...tasks,{status:'incomplete',task:newTask,taskId:Date.now()}])
    setNewTask(''); // Clear input field
    }
    
return(
    <span>
 
        <input placeholder="Add Tasks" className='input-box' value={newTask} onChange={(e) => setNewTask(e.target.value)} ></input>
        <button className='add-button' onClick={() => addTask()}>Add</button>
       
    </span>
)
}

export {ToDoList}