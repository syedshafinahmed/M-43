import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is a header</h3>
            <nav className='flex justify-between'>
                <NavLink to="/">Home</NavLink>
                <NavLink  to="/mobiles">Mobiles</NavLink>
                <NavLink  to="/laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;