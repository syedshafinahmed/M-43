import React, { Suspense } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const [showInfo, setShowInfo] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=> res.json())

    return (
        <div className='border-2 border-yellow-300 mb-5 rounded-lg p-5'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <small>Contact: {phone}</small><br />
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;