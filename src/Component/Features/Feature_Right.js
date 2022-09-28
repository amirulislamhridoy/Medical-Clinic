import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDate } from '../../Redux/dateSlice';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Feature_Right.css'

const Feature_Right = () => {
    const selectDate = useSelector(state => state.date.date)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(selectDate)

    useEffect(() => {
        dispatch(updateDate(selectDate))
    }, [selected])
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

export default Feature_Right;