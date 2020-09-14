import React from 'react';

function Error404() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc((100vh - 216px)',
            }}
        >
            <h1>404 ERROR :(</h1>
            <h4>요청하신 페이지는 찾을 수 없습니다.</h4>
        </div>
    );
}

export default Error404;
