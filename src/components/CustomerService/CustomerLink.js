import React from 'react';
import { NavLink } from 'react-router-dom';

function CustomerLink({ path, text }) {
    console.log(path);
    return (
        <NavLink to={`/customer-service/${path}`} activeClassName={'active'}>
            <div className="inactive">
                <li>{text}</li>
            </div>
        </NavLink>
    );
}

export default React.memo(CustomerLink);
