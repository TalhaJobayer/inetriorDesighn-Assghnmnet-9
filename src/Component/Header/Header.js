import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../image/download.webp'

const Header = () => {
    return (
        <div className='menuButton'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
           <nav className='menu2' >
               <Link  to='/' > Home</Link>
               <Link  to='/Review' > Review</Link>
               <Link to='/Dashboard' >Dashboard</Link> 
               <Link to='/Blog' >Q/A</Link> 
               
           </nav>
        </div>
    );
};

export default Header;