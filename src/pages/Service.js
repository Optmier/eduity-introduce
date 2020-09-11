import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionFrame from '../components/SectionFrame';
import Section1 from '../components/ServiceSections/Section1';

function Service() {
    useEffect(() => {
        window.analytics.logEvent('서비스 페이지 접속');
    }, []);

    return (
        <>
            <Helmet>
                <title>에듀이티, 불필요한 시간과 비용을 없애자! | Eduity for infinite pioneer</title>
            </Helmet>
            <SectionFrame id="service_section_1">
                <Section1 />
            </SectionFrame>
        </>
    );
}

export default Service;
