import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import d1 from '../../photos/doctor-1.jpg'
import d2 from '../../photos/doctor-2.jpg'
import d3 from '../../photos/doctor-3.jpg'
import d4 from '../../photos/doctor-4.jpg'
import d5 from '../../photos/doctor-5.jpg'
import './Doctors.css'
import Footer from '../Shared/Footer';

const Doctors = () => {
    const location = useLocation()
    return (
        <main className='doctors'>
            <Header location={location}></Header>
            <div>
                <div>
                    <img src={d1} alt=''></img>
                    <h3>Dr. Nick Slims</h3>
                </div>
                <div>
                    <img src={d2} alt=''></img>
                    <h3>Dr. Michael Linden</h3>
                </div>
                <div>
                    <img src={d3} alt=''></img>
                    <h3>Dr. Max Turner</h3>
                </div>
                <div>
                    <img src={d4} alt=''></img>
                    <h3>Dr. Amy Adams</h3>
                </div>
                <div>
                    <img src={d5} alt=''></img>
                    <h3>Dr. Julia Jameson</h3>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
};

export default Doctors;