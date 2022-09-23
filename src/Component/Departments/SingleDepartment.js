import React from 'react';

const SingleDepartment = (props) => {
    const { name, img, system } = props.department
    return (
        <div>
            <img width='300' src={img} ></img>
            <h3>{name}</h3>
            <p>{system}</p>
        </div>
    );
};

export default SingleDepartment;