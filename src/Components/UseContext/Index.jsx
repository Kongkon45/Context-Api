import React, { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";

const Index = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Kongkon Jowarder" },
    { id: 2, name: "Dalim Kazi" },
    { id: 3, name: "Mehedi Hasan" },
  ]);
  const handleDeleteUser = (id)=>{
    const filterUser = users.filter((user)=>{
        return user.id !== id ;
        
    })
    setUsers(filterUser)
    
  }
  const handleNewUser = (newUser)=>{
    setUsers(prevUser=>[...prevUser, newUser])
  }
  return <div>
    <NewUser  handleNewUser={handleNewUser}/>
    <Users users={users} handleDeleteUser={handleDeleteUser}/>
  </div>;
};

export default Index;
