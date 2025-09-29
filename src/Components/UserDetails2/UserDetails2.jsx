import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const {name, username } = use(userPromise);

    return (
        <div>
            <p><small>user name: {username}</small></p>
            <p><small>name: {name}</small></p>
        </div>
    );
};

export default UserDetails2;