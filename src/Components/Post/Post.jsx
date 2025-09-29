import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div className='border-2 border-red-700 p-5 mb-5 rounded-xl'>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {title}</button>
        </div>
    );
};

export default Post;