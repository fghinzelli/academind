import React from "react";
import Card from "../Card/Card";
import User from "./User";
import style from "./UserList.module.css";

const UserList = (props) => {

  const removeUserHandler = (username) => {
    console.log('removeUserHandler')
    props.removeUser(username);
  };

  return (
    <Card>
      <ul className={style.userList}>
        {props.users.map((user) => (
          <User removeUser={username => removeUserHandler(username)} key={user.username} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
