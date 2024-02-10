import React from 'react'
import User from './User';
import { CustomHook } from '../Hooks/CustomHook';
const Users = () => {
  const {users}= CustomHook()
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
        {users.map((user)=>{
            return <User key={user.id} user={user} />
        })}
    </div>
  )
}

export default Users