import './App.css';
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {username: 'Bruce', age: 30},
    {username: 'Arnold', age: 60}
  ]);

  const addUserHandler = (user) => {
    setUsers(users.concat(user))
  } 

  const removeUser = username => {
    setUsers(users.filter(user => user.username !== username))
  }

  return (
    <div className="App">
      <UserForm addUser={addUserHandler} />
      <UserList removeUser={removeUser} users={users} />
    </div>
  );
}

export default App;
