import React, { useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import './Feature_left.css'
import { toast } from 'react-toastify';

const Feature_Left = () => {
    const date = useSelector(state => state.date.date)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const submitFrom = e => {
        e.preventDefault()
        const department = e.target.department.value
        const name = e.target.name.value
        const email = e.target.email.value
        const doctor = e.target.doctor.value
        const phone = e.target.phone.value
        const bookData = {
            department, name, email, doctor, phone, date
        }
        if (department === 'Select Department' || doctor === 'Select Doctor') {
            return alert('Please fill full form.')
        }
        axios.post('https://medical-clinic-server.herokuapp.com/book', bookData)
            .then(function (response) {
                setSuccess('We will contract with you.');
                toast.success('You appointment is success. We will contract with you')
                setError('')
                e.target.reset()
                setTimeout(() => {
                    setSuccess('')
                }, [5000])
            })
            .catch(function (error) {
                setError(error.code)
                setSuccess('')
                toast.error(error.message)
                setTimeout(() => {
                    setError('')
                }, [5000])
            });
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
                    <input name='email' type='email' placeholder='Your Email' required></input>
                    {/* <select name='doctor' required>
                        <option>Select Doctor</option>
                        <option>Omer Doctor</option>
                    </select> */}
                    <input name='phone' type='number' placeholder='Phone' required></input>
                </div>
                <input type='submit' value='Make an Appointment'></input>
                {success && <p style={{ color: 'lime' }}>{success}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Feature_Left;
