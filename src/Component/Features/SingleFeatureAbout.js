import React from 'react';

const SingleFeatureAbout = ({feature}) => {
    const {title, text, fontAwesome} = feature
    return (
        <div>
            <i className={`${fontAwesome}`}></i>
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SingleFeatureAbout;