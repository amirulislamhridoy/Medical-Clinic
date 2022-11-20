import React from 'react';
import { Link } from 'react-router-dom';
import './SingleDepartment.css'

const SingleDepartment = (props) => {
    const { name, img, system } = props.department
    return (
        <div className='single-department'>
            <img style={{width: '100%'}} src={img} ></img>
            <h3><Link to=''>{name}</Link></h3>
            <p><Link to=''>{system}</Link></p>
        </div>
    );
};

export default SingleDepartment;