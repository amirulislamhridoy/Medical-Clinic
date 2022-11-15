import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css'

const OurServices = () => {
    const [services, setServices] = useState([])
    let [count, setCount] = useState(3)

    useEffect(() => {
        fetch('departments.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        // const slider = setInterval(() => {
        //     ++count
        //     if (count >= services.length) {
        //         count = 0
        //     }
        //     setDataCount(services[count])
        //     setCount(count)
        // }, 3000)
        // return () => clearInterval(slider)
    }, [])
    return (
        <section className='home-services'>
            <div className='left'>
                <h2>Departments</h2>
                <Link to=''>Outpatient Surgery</Link>
                <Link to=''>Cardiac Clinicy</Link>
                <Link to=''>Ophthlmology Clinic</Link>
                <Link to=''>Gynaecological Clinic</Link>
                <Link to=''>Outpatient Rehabilitation</Link>
                <Link to=''>Laryngological Clinic</Link>
                <Link to=''>Pediatric Clinic</Link>
                <button>View all</button>
            </div>
            <div className='right'>
                <div>
                    <span>Innovation</span>
                    <h2>Our Services</h2>
                </div>

            </div>
        </section>
    );
};

export default OurServices;