import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/product">Product</a>
                <a href="/invertory">Inventory</a>
                <a href="/about">About</a>
                
            </div>
        </nav>
    );
};

export default Header;