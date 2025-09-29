import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Route = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Route;