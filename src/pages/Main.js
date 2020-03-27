import React, { useEffect } from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
// import SectionEvents from '../components/SectionEvents';
import SectionContactUs from '../components/SectionContactUs';
import SectionLocation from '../components/SectionLocation';
import SectionProblem from '../components/SectionProblem';

function Main() {
    useEffect(() => {
        setTimeout(() => {
            if (window.scrollY <= 3) {
                document.querySelector('.nav-root').classList.remove('scrolled');
                document.querySelector('.nav-logo>.color').classList.remove('scrolled');
                document.querySelector('.nav-logo>.white').classList.remove('scrolled');
            }
        }, 0);
    }, []);

    return (
        <>
            <Section1 />
            <SectionProblem />
            <Section3 />
            <Section2 />
            {/* <SectionEvents /> */}
            <SectionContactUs />
            <SectionLocation />
        </>
    );
}

export default Main;
