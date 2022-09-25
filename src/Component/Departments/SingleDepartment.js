import React from 'react';
import './SingleDepartment.css'

const SingleDepartment = (props) => {
    const { name, img, system } = props.department
    return (
        <div className='single-department'>
            <img style={{width: '100%'}} src={img} ></img>
            <h3>{name}</h3>
            <p>{system}</p>
        </div>
    );
};

export default SingleDepartment;