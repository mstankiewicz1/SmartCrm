import React from 'react';


const Customer = (props) => {

    return (
        <div>
            <li>{props.name}</li>
            <li>{props.surname}</li>
            <li>{props.pesel}</li>
        </div>

    )
};

export default Customer;
