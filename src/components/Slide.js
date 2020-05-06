import React from 'react';
import styled from 'styled-components';

export default function Slide({ num, text }) {
    const style = {
        width: '300%',
        height: '100px',
    };

    return (
        <div style={style}>
            <span>{num}</span>
            {text}
        </div>
    );
}
