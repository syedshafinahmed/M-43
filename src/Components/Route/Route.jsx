import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Route = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div className='flex gap-20'>
                <Sidebar></Sidebar>
                {
                    isNavigating && <span>Loading....</span>
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Route;