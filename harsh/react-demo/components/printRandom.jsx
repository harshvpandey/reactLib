import React,{useContext} from 'react'
import UserContext from './userProvider';
const PrintRandom = () => {
    const { user } = useContext(UserContext);
  return (
    <div>User is {user.name}</div>
  )
}

export default PrintRandom