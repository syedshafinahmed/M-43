import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className='border-2 border-yellow-300 mb-5 rounded-lg p-5'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <small>Contact: {phone}</small><br />
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;