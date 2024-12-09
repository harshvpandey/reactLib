import { useState } from 'react'
import { ToDoList } from './components/to-do-list'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <div className='heading'>To Do List</div>
      <ToDoList></ToDoList>
    </div>
  )
}

export default App
