import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
// import SectionEvents from '../components/SectionEvents';
import SectionContactUs from '../components/SectionContactUs';
import SectionLocation from '../components/SectionLocation';
import SectionProblem from '../components/SectionProblem';

function Main() {
    useEffect(() => {
        window.analytics.logEvent('메인 페이지 접속');
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
            <Helmet>
                <title>미국 대학 보딩스쿨 컨설팅 | 국내 국제고 컨설팅 | 어학연수 컨설팅 :: 에듀이티 | Eduity for infinite pioneer</title>
            </Helmet>
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
