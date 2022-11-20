import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../../hook/useDoctors';
import './HomeDoctors.css'

const HomeDoctors = () => {
    const [doctors] = useDoctors()
    console.log(doctors)
    return (
        <section className='home-doctors'>
            <p>Professionals</p>
            <h2>Our Doctors</h2>
            <div className='doctors-container'>
                {doctors?.slice(0, 4)?.map(doctor => <div>
                    <div>
                        <img src={doctor.img} alt=''></img>
                    </div>
                    <div>
                        <h3><Link to=''>{doctor.name}</Link></h3>
                        <h3><span>{doctor.designation}</span></h3>
                    </div>
                    <div>
                        <p>{doctor.description.slice(0, 58)}...</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-mobile-screen-button"></i> {doctor.mobile}</p>
                        <p><i class="fa-regular fa-envelope"></i> {doctor.email}</p>
                    </div>
                </div>)}
            </div>
        </section>
    );
};

export default HomeDoctors;