import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../photos/logo.png'
import './Header.css'

const Header = ({ location }) => {
    const [scrollY, setScrollY] = useState(false)

    function scrollFn(){
        if(window.scrollY >= 200){
            setScrollY(true)
        }else{
            setScrollY(false)
        }
    }
    window.addEventListener('scroll', scrollFn)

    return (
        <header className={`${location?.pathname === '/departments' && 'change-header-bg'} ${scrollY && 'header-change-bg'}`}>
            <div>
                <nav className='small-nav'>
                    <ul>
                        <li><Link to='' alt=''>FAQ</Link></li>
                        <li><Link to='' alt=''>Book Appointment Contacts </Link></li>
                        <li><Link to='' alt=''>example@example.com</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='' alt=''><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to='' alt=''><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to='' alt=''><i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link to='' alt=''><i className="fa-brands fa-youtube"></i></Link></li>
                    </ul>
                </nav>
                <nav className='main-nav'>
                    <Link to='/' alt=''>
                        <img src={logo} alt=''></img>
                    </Link>
                    <ul>
                        <li><Link to='/' alt=''>Home</Link></li>
                        <li><Link to='/departments' alt=''>Department</Link></li>
                        <li><Link to='' alt=''>Timetable</Link></li>
                        <li><Link to='' alt=''>Features</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;