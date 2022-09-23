import React from 'react';

const ContractChild = ({text, title, children}) => {
    return (
        <div>
            {children}
            <div>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ContractChild;