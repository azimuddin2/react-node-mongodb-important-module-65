import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/add-user'>AddUser</Link>
        </nav>
    );
};

export default Header;