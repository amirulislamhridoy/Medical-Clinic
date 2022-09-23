import React from 'react';
import logo from '../../../photos/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='small-nav'>
                <ul>
                    <li><a href='' alt=''>FAQ</a></li>
                    <li><a href='' alt=''>Book Appointment Contacts </a></li>
                    <li><a href='' alt=''>example@example.com</a></li>
                </ul>
                <ul>
                    <li><a href='' alt=''><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='' alt=''><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href='' alt=''><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href='' alt=''><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
            </nav>
            <nav className='main-nav'>
                <a href='' alt=''>
                    <img src={logo} alt=''></img>
                </a>
                <ul>
                    <li><a href='' alt=''>Home</a></li>
                    <li><a href='' alt=''>Department</a></li>
                    <li><a href='' alt=''>Timetable</a></li>
                    <li><a href='' alt=''>Features</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;