import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {website, name} = user;
    
    return (
        <div>
            <h3>Users Details</h3>
            <p>Name: {name}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;