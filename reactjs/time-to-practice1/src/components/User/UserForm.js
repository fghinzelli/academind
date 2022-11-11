import React, { useState } from "react";
import Card from "../Card/Card";
import estilo from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
    props.addUser({ username: username, age: age });
    setUsername("");
    setAge(0);
  };

  return (
    <Card>
      <form className={estilo.userForm}>
        <label className={estilo.labelInput}>Username</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className={estilo.formInput}
          name="username"
          type="text"
        />
        <label className={estilo.labelInput}>Age (Years)</label>
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className={estilo.formInput}
          name="age"
          type="number"
        />
        <button className={estilo.addUserButton} onClick={addUserHandler}>
          Add user
        </button>
      </form>
    </Card>
  );
};

export default UserForm;
