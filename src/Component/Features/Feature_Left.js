import React from 'react';
import { useSelector } from 'react-redux';
import './Feature_left.css'

const Feature_Left = () => {
    const date = useSelector(state => state.date.date)

    const submitFrom = e => {
        e.preventDefault()
        const department = e.target.department.value
        const name = e.target.name.value
        const mail = e.target.mail.value
        const doctor = e.target.doctor.value
        const time = e.target.time.value
        const phone = e.target.phone.value

        if (department === 'Select Department' || doctor === 'Select Doctor' || time === 'Time') {
            alert('Please fill full form.')
        }
    }
    return (
        <div className='feature-left'>
            <h2>Book an Appointment</h2>
            <form onSubmit={submitFrom}>
                <div className='form-div'>
                    <select name='department' required>
                        <option>Select Department</option>
                        <option value='Outpartient Surgery'>Outpartient Surgery</option>
                        <option value='Cardiac Clinic'>Cardiac Clinic</option>
                        <option value='Ophthalology Clinic'>Ophthalology Clinic</option>
                        <option value='Gynacecological Clinic'>Gynacecological Clinic</option>
                        <option value='Outplatient Rehabilitation'>Outplatient Rehabilitation</option>
                        <option value='Larynogological Clinic'>Larynogological Clinic</option>
                        <option value='Pedicatric Clinic'>Pedicatric Clinic</option>
                        <option value='Iabratory Analysis'>Iabratory Analysis</option>
                    </select>
                    <input name='name' type='text' placeholder='Your Name' required></input>
                    <input name='mail' type='mail' placeholder='Your Email' required></input>
                    <select name='doctor' required>
                        <option>Select Doctor</option>
                    </select>
                    <select name='time' required>
                        <option>Time</option>
                    </select>
                    <input name='phone' type='number' placeholder='Phone' required></input>
                </div>
                <input type='submit' value='Make an Appointment'></input>
            </form>
        </div>
    );
};

export default Feature_Left;
