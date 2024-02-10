import React, { useContext } from 'react'
import User from './User';
import { UsersContext } from '../Context/UsersContext';

const Users = () => {
  const {users}= useContext(UsersContext)
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
        {users.map((user)=>{
            return <User key={user.id} user={user} />
        })}
    </div>
  )
}

export default Users