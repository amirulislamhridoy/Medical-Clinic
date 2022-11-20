import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDate } from '../../Redux/dateSlice';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Appointment_Right.css'
import { format } from 'date-fns';

const Appointment_Right = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(new Date())
    const date = format(selected, 'PP')

    useEffect(() => {
        dispatch(updateDate(date))
    }, [date])
    return (
        <DayPicker
            className='day-picker'
            style={{ color: 'white', fontWeight: '700', backgroundColor: '#3065b5' }}
            mode='single'
            selected={selected}
            onSelect={setSelected}
        />
    );
};

export default Appointment_Right;