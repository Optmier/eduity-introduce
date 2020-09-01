import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/main_section_1.scss';

const Section = React.memo(function Section({ id, widthLimited, children }) {
    return (
        <section id={id} className="root">
            {widthLimited ? <div className="wrapper">{children}</div> : <div className="no-wrapper">{children}</div>}
        </section>
    );
});

Section.defaultProps = {
    widthLimited: true,
};

function Main() {
    useEffect(() => {
        window.analytics.logEvent('메인 페이지 접속');
    }, []);

    return (
        <>
            <Helmet>
                <title>미국 대학 보딩스쿨 컨설팅 | 국내 국제고 컨설팅 | 어학연수 컨설팅 :: 에듀이티 | Eduity for infinite pioneer</title>
            </Helmet>
            <Section id="main_section_1"></Section>
        </>
    );
}

export default Main;
