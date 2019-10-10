import React from 'react';
import { NavLink as Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header>
            <div className="section-inner-header">
                <img className='logo' src="/data.svg" alt="brand-icon"/>            
                <nav>
                    <ul className='navbar-list'>
                        <li><Link to='/' replace={true}>Home</Link></li>
                        <li><Link to='/posts' replace={true}>Posts</Link></li>
                        <li><Link to='/data' replace={true}>Data</Link></li>
                    </ul>
                </nav>
                <div className='mobile-list-hide'>
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-list">
                        <Link to='/'>Home</Link>
                        <Link to='/posts'>Posts</Link>
                        <Link to='/data'>Data</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
