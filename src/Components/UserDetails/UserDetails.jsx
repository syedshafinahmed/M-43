import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    // const params = useParams();
    // console.log(params);
    
    const {userId} = useParams();
    console.log(userId);
    
    
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