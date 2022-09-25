import React from 'react';

const SingleClientSay = ({client}) => {
    const {name, img, text, title} = client
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <aside>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </aside>
            </div>
            <article>
                {text}
            </article>
        </div>
    );
};

export default SingleClientSay;