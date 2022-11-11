import './App.css';
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm';
import Popup from './components/Popup/Popup';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {username: 'Bruce', age: 30},
    {username: 'Arnold', age: 60}
  ]);
  const [openPopup, setOpenPopup] = useState(false);
  const [error, setError] = useState('')

  const addUserHandler = (user) => {
    if (!validateUser(user)) {
      setOpenPopup(true);
    } else {
      setUsers(users.concat(user))
    }
  }

  const validateUser = (user) => {
    if (user.age < 0) {
      setError('Please enter a valid age (> 0).');
      return false;
    } else if (user.username === '' || user.age === '' || user.age === 0) {
      setError('Please enter a valid name and age (non-empty values).');
      return false;
    }
    return true
  }

  const removeUser = username => {
    setUsers(users.filter(user => user.username !== username))
  }

  return (
    <div className="App">
      <UserForm addUser={addUserHandler} />
      <UserList removeUser={removeUser} users={users} />
      { openPopup ? <Popup closePopup={() => setOpenPopup(false)} error={error} /> : ''}
    </div>
  );
}

export default App;
