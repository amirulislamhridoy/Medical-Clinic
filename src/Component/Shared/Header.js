import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../../hook/useAdmin';
import logo from '../../photos/logo.png'
import './Header.css'
import Loading from './Loading';

const Header = ({ location }) => {
    const [scrollY, setScrollY] = useState(false)
    const [navIcon, setNavIcon] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)

    function scrollFn() {
        if (window.scrollY >= 100) {
            setScrollY(true)
        } else {
            setScrollY(false)
        }
    }
    window.addEventListener('scroll', scrollFn)
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <header style={{ backgroundColor: `${navIcon ? '#4575bd' : ""}` }} className={`${location?.pathname?.length > 1 && 'change-header-bg'} ${scrollY && 'header-change-bg'}`}>
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
                        <img className='logo' src={logo} alt=''></img>
                    </Link>
                    <ul className={`${navIcon && 'ul'}`}>
                        <li><Link to='/' alt=''>Home</Link></li>
                        <li><Link to='/departments' alt=''>Departments</Link></li>
                        <li><Link to='/features' alt=''>Appointment</Link></li>
                        <li><Link to='/doctors' alt=''>Our Doctors</Link></li>
                        {admin && <>
                            <li><Link to='/allAppointment' alt=''>All Appointment</Link></li>
                            <li><Link to='/makeAdmin' alt=''>Make Admin</Link></li>
                        </>}
                        {user ?
                            <li><Link onClick={() => signOut(auth)} to='/login' alt=''>Log Out</Link></li>
                            :
                            <li><Link to='/login' alt=''>Login</Link></li>
                        }

                        <div className='mobile-short-nav'>
                            <li><Link to='' alt=''>FAQ</Link></li>
                            <li><Link to='' alt=''>Book Appointment Contacts </Link></li>
                            <li><Link to='' alt=''>example@example.com</Link></li>
                            <div>
                                <li><Link to='' alt=''><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to='' alt=''><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to='' alt=''><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to='' alt=''><i className="fa-brands fa-youtube"></i></Link></li>
                            </div>
                        </div>
                    </ul>
                    <i onClick={() => setNavIcon(true)} className={`fa-solid fa-bars ${navIcon && 'display-none'}`}></i>
                    <i onClick={() => setNavIcon(false)} className={`fa-solid fa-x ${!navIcon && "display-none"}`}></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;