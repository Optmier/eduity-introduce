import React from 'react';

function Wrapper({ children }) {
    const style = {
        // minHeight: '70vh',
        // paddingTop: '120px',
    };

    return <div style={style}>{children}</div>;
}

export default Wrapper;
