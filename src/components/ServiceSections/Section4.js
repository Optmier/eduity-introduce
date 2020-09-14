import React from 'react';
import '../../styles/service_section_4.scss';
import SectionTitle from '../SectionTitle';
import FAQAccordion from './FAQAccordion';

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

            <div className="subs-root">
                <FAQAccordion />
            </div>
        </>
    );
}

export default React.memo(Section3);
