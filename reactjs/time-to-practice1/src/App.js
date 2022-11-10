import './App.css';
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm';

function App() {
  const users = [
    {name: 'Bruce', age: 30},
    {name: 'Arnold', age: 60}
  ];

  return (
    <div className="App">
      <UserForm />
      <UserList users={users} />
    </div>
  );
}

export default App;
