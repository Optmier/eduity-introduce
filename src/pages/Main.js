import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
// import SectionEvents from '../components/SectionEvents';
import SectionContactUs from '../components/SectionContactUs';
import SectionLocation from '../components/SectionLocation';

function Main() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <SectionEvents /> */}
            <SectionContactUs />
            <SectionLocation />
        </>
    );
}

export default Main;
