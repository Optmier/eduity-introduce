import React from 'react';
import '../../styles/service_section_3.scss';
import { Fade } from 'react-reveal';
import SectionTitle from '../SectionTitle';

/**
 * h1: 36px / 44px
 * h2: 32px / 42px
 * h3: 24px / 32px
 * h4: 18px / 24px
 * p: 16px
 */

function Section3() {
    return (
        <>
            <SectionTitle tag="FAQ" title="자주 묻는 질문" subText="자주 문의하시는 질문과 답변을 모았습니다." />
            <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}></Fade>
        </>
    );
}

export default React.memo(Section3);
