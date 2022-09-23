import React from 'react';

const SingleServiceAbout = ({d}) => {
    const {title, text, bgColor} = d
    return (
        <div style={{backgroundColor: `${bgColor}`}}>
            <h3>{title}</h3>
            <p>{text}</p>
            <button>React More</button>
        </div>
    );
};

export default SingleServiceAbout;