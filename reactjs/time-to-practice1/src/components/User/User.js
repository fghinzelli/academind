import React from 'react';
import style from './User.module.css';

const User = (props) =>  <li onClick={() => props.removeUser(props.user.username)} className={style.userItem}>{props.user.username} ({props.user.age} years old)</li>

export default User;