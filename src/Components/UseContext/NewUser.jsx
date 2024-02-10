import React, { useState } from "react";
import { CustomHook } from "../Hooks/CustomHook";
const NewUser = () => {
  const {setUsers} = CustomHook()
  const [user, setUser] = useState("");
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), name: user };
    setUsers((prevUser) => [...prevUser, newUser]);
      setUser(" ");
  };
  return (
    <div>
      <h1>User Registration </h1>
      <form onSubmit={handleSubmitUser}>
        <input
          className="border-2"
          placeholder="Enter your name ..."
          type="text"
          name="user"
          id="user"
          //   value={user}
          onChange={handleUserChange}
        />
        <input
          className="bg-blue-400 text-white py-1 px-3 mt-2 rounded-xl text-2xl font-bold"
          type="submit"
          value="Add User"
        />
      </form>
    </div>
  );
};

export default NewUser;
