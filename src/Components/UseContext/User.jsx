import React, { useContext } from 'react'
import { UsersContext } from '../Context/UsersContext';

const User = ({user}) => {
  const {users, setUsers} = useContext(UsersContext)
    const handleDeleteId = (id)=>{
      const filterUser = users.filter((user) => {
        return user.id !== id;
      });
      setUsers(filterUser);
    }
  return (
    <div className='bg-orange-400 text-white p-10 mx-5 rounded-2xl'>
        <p>{user.id}</p>
        <h1>{user.name}</h1>
        <button onClick={()=>handleDeleteId(user.id)} className='bg-blue-400 py-1 px-3 mt-2 rounded-xl text-2xl font-bold'>Delete</button>
    </div>
  )
}

export default User