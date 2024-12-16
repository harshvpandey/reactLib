import {useState} from "react";


const ToDoList=()=>{

    const [tasks, setTasks] = useState([]); // List of tasks
    const [newTask, setNewTask] = useState(''); // Input value
    
    const addTask=()=>{
 
    console.log(tasks)
 
    setTasks([...tasks,{status:'incomplete',task:newTask,taskId:Date.now()}])
    setNewTask(''); // Clear input field
  }
  
  const incompleteTasks = tasks.filter(task => task.status === 'incomplete');
  const completedTasks = tasks.filter(task => task.status === 'completed');
return(
    <span>
 
        <input placeholder="Add Tasks" className='input-box' value={newTask} onChange={(e) => setNewTask(e.target.value)} ></input>
        <button className='add-button' onClick={() => addTask()}>Add</button>
        <br></br>
        <div className="lists">
          <div className="incomplete-list">
          <span>Items To be Completed</span>
          <div>
          {incompleteTasks.map((task) => (
              <div key={task.taskId} className='task-div'>
                <span>
                  <input value={task.task} onChange={(e)=>{setTasks(tasks.map(t=>t.task===task.task?{...task,task:e.target.value}:t))}}></input>
                </span>
                <button onClick={() => {
                  setTasks(tasks.map(t => t.taskId === task.taskId ? { ...t, status: 'completed' } : t));
                }} className="incomplete-button">
                  Mark as Completed
                </button>
              </div>
            ))}
          </div>
          </div>

          <div className="completed-list">
          <span>Items Completed</span>
          <div className='task-div-completed'>
          {completedTasks.map((task) => (
              <div key={task.taskId}>
                <span>{task.task}</span>
              
              </div>
            ))}
          </div>
          </div>
        </div>

    </span>
)
}

export {ToDoList}