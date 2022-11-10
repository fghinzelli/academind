import React from 'react';
import Card from '../Card/Card';
import User from './User';

const UserList = (props) => {
    return (
        <Card>
            <ul>{props.users.map(user => <User user={user} />)}</ul>
        </Card>
    );
}

export default UserList;