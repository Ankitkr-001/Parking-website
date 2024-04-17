import React from 'react'
import './Navbar.css';
import logo  from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="link">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Concept Used</li>
                <li>Feedback</li>
                <span></span>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar