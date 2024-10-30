import React from 'react'

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];
const UserList = () => {
  return (
    <div>
        {users.map(user=>(
        <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
    
        </div>
        )
        )}
    </div>
  )
}

export default UserList