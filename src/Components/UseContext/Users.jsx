import React from 'react'
import User from './User';

const Users = (props) => {
    const {users} = props;
    const {handleDeleteUser} = props;
    console.log(users)
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
        {users.map((user)=>{
            return <User key={user.id} user={user} handleDeleteUser={handleDeleteUser}/>
        })}
    </div>
  )
}

export default Users