import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header';

const Appointment = () => {
    const location = useLocation()
    return (
        <main>
            <Header location={location}></Header>

            <form >
                <h2>Book an Appointment</h2>

                <select placeholder='Select Department'>
                    <option></option>
                </select>
                <input type='text' placeholder='Your Name'></input>
                <input type='mail' placeholder='Your Email'></input>
                <select placeholder='Select Doctors'>
                    <option></option>
                </select>
                <input type='number' placeholder='Phone'></input>
                {/* <input type='date' placeholder='Phone'></input> */}
                <input type='submit' value='make an Appointment'></input>
            </form>
        </main>
    );
};

export default Appointment;