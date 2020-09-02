import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionFrame from '../components/SectionFrame';
import Section1 from '../components/MainSectoins/Section1';
import Section2 from '../components/MainSectoins/Section2';

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
        </>
    );
}

export default Main;
