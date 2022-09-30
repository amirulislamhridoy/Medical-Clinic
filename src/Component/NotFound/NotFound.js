import React from 'react';
import Header from '../Shared/Header';
import img from '../../photos/notFound.jpg'
import { useLocation } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const location = useLocation()
    return (
        <div className='notFound'>
            <Header location={location}></Header>
            <div>
            <img src={img} alt=''></img>
            </div>
        </div>
    );
};

export default NotFound;