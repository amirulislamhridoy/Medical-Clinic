import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const [services, setServices] = useState([])
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('departments.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <footer>
            <div>
                <ul>
                    <h3>Contact Information</h3>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>
                            227 Marion street
                            <br />
                            New York
                            <br />
                            USA
                        </span>
                    </li>
                    {/* <li>
                        <i className="fa-solid fa-globe"></i>
                        <Link to='' className='fa-solid2 fa-globe2'>
                            medical-clinic.cmsmasters.net
                        </Link>
                    </li> */}
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <Link to=''>
                            medical-clinic@mail.com
                        </Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <span>
                            1-222-333-444-45444
                        </span>
                    </li>
                </ul>
                <ul>
                    <h3>Doctors</h3>
                    {doctors.map(doctor => <li>
                        <Link to=''>{doctor.name}</Link>
                    </li>)}
                </ul>
                <ul>
                    <h3>Services</h3>
                    {services.slice(0,5).map(service => <li>
                        <Link to=''>{service.name}</Link>
                    </li>)}
                </ul>
                <ul>
                    <h3>Contact Us</h3>
                    <form>
                        <input type='email' placeholder='Email'></input>
                        <textarea type='text' placeholder='Message'></textarea>
                        <input type='submit' value='Submit'></input>
                    </form>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;