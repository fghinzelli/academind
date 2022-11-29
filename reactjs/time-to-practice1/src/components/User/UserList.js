import React from "react";
import Card from "../Card/Card";
import User from "./User";
import style from "./UserList.module.css";

const UserList = (props) => {

  const removeUserHandler = (username) => {
    console.log('removeUserHandler')
    props.removeUser(username);
  };



  let list = 'The list is empty';

  if (props.users.length !== 0) {
    list = (
      <ul className={style.userList}>
        {props.users.map((user) => (
          <User removeUser={username => removeUserHandler(username)} key={user.username} user={user} />
        ))}
      </ul>
    )
  }

  return (
    <Card>
      { list }
    </Card>
  );
};

export default UserList;
