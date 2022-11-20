import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './Appointment.css'
import Appointment_Left from './Appointment_Left';
import Appointment_Right from './Appointment_Right';
import SingleAppointmentAbout from './SingleAppointmentAbout';

const Appointment = () => {
    const location = useLocation()
    const [featuresAbout, setFeaturesAbout] = useState([])

    useEffect(() => {
        fetch('featureAbout.json')
        .then(res => res.json())
        .then(data => setFeaturesAbout(data))
    }, [])

    return (
        <main>
            <Header location={location}></Header>
            <section className='Appointment-section'>
                <div>
                    <Appointment_Left></Appointment_Left>
                    <Appointment_Right></Appointment_Right>
                </div>
            </section>
            <section className='Appointment-about'>
                {featuresAbout?.map(feature => <SingleAppointmentAbout feature={feature} key={feature._id}></SingleAppointmentAbout>)}
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Appointment;