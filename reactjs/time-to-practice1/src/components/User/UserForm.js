import React, { useState } from 'react';
import Card from '../Card/Card';
import estilo from './UserForm.module.css';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0)

    const addUserHandler = event => {
        event.preventDefault();
        console.log(username, age)
    }

    return (
        <Card>
            <form className={estilo.userForm}>
                <label className={estilo.labelInput}>Username</label>
                <input onChange={event => setUsername(event.target.value)} className={estilo.formInput} name="username" type="text" />
                <label className={estilo.labelInput}>Age (Years)</label>
                <input onChange={event => setUsername(event.target.value)} className={estilo.formInput} name="age" type="number" />
                <button className={estilo.addUserButton} onClick={addUserHandler}>Add user</button>
            </form>
        </Card>
    );
}

export default UserForm;