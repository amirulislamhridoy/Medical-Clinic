import React from 'react';
import './Feature_left.css'

const Feature_Left = () => {
    return (
        <div className='feature-left'>
            <h2>Book an Appointment</h2>
            <form>
                <div className='form-div'>
                    <select>
                        <option>Select Department</option>
                    </select>
                    <input type='text' placeholder='Your Name'></input>
                    <input type='mail' placeholder='Your Email'></input>
                    <select>
                        <option>Select Doctor</option>
                    </select>
                    <input type='number' placeholder='Phone'></input>
                </div>
                <input type='submit' value='Make an Appointment'></input>
            </form>
        </div>
    );
};

export default Feature_Left;