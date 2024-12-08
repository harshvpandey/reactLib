import React, { useEffect, useState } from 'react';

function TodoListComponent() {
  const [todos, setTodos] = useState([]); // State to store the fetched list of todos
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to handle any errors

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodos(data.slice(0,5)); // Update the todos state with the fetched data
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchTodos();
  }, []); // Empty dependencies array means this effect runs once on mount

  // Render loading, error, or the fetched data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Api Integration List</h2>
      <ul style={{ listStylePosition: 'inside', padding: 0,listStyleType:'none'}}>
        {todos.map(todo => (
          <li key={todo.id}  style={{ border: '1px solid rgb(0, 0, 0)', padding:'5px',margin:"5px" }}>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
      <div>
        
      </div>
    </div>
  );
}

export default TodoListComponent;
