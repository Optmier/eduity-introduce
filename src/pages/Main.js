import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionFrame from '../components/SectionFrame';
import Section1 from '../components/MainSections/Section1';
import Section2 from '../components/MainSections/Section2';
import Section3 from '../components/MainSections/Section3';
import Section4 from '../components/MainSections/Section4';
import Section5 from '../components/MainSections/Section5';
import Section6 from '../components/MainSections/Section6';
import BannerMatrios from '../components/BannerMatrios';
import BannerFreeTrial from '../components/BannerFreeTrial';

function Main() {
    useEffect(() => {
        window.analytics.logEvent('메인 페이지 접속');
    }, []);

    return (
        <>
            <Helmet>
                <title>미국 대학 보딩스쿨 컨설팅 | 국내 국제고 컨설팅 | 어학연수 컨설팅 :: 에듀이티 | Eduity for infinite pioneer</title>
            </Helmet>
            <SectionFrame id="main_section_1">
                <Section1 />
            </SectionFrame>
            <SectionFrame id="main_section_2">
                <Section2 />
            </SectionFrame>
            <SectionFrame id="main_section_3">
                <Section3 />
            </SectionFrame>
            <SectionFrame id="main_section_4">
                <Section4 />
            </SectionFrame>
            <SectionFrame id="main_section_5">
                <Section5 />
            </SectionFrame>
            <SectionFrame id="main_section_6">
                <Section6 />
            </SectionFrame>
            <SectionFrame id="main_section_banner_matrios">
                <BannerMatrios />
            </SectionFrame>
            <SectionFrame id="main_section_banner_free_trial">
                <BannerFreeTrial />
            </SectionFrame>
        </>
    );
}

export default Main;
