import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import ImgStep1 from '../../images/main_sections/main_5-0.svg';
import ImgStep2 from '../../images/main_sections/main_5-1.svg';
import ImgStep3 from '../../images/main_sections/main_5-2.svg';
import ImgStep4 from '../../images/main_sections/main_5-3.svg';
import '../../styles/main_section_5.scss';
import SectionTitle from '../SectionTitle';

function StepCard({ icon, title, text, step, delay }) {
    return (
        <div className={`step-card root ${step}`}>
            <div className="icon-container">
                <img className="icon" src={icon} alt="icon..." />
            </div>
            <div className="contents">
                <div className="title-container">
                    <h4 className="title-text">{title}</h4>
                </div>
                <div className="text-container">
                    <p className="text">{text}</p>
                </div>
            </div>
        </div>
    );
}

StepCard.defaultProps = {
    icon: null,
    title: 'title',
    text: 'text',
    colorStep: 'step1',
    delay: 100,
};

function Section5() {
    const [viewMobile, setViewMobile] = useState(true);

    window.onresize = () => {
        if (window.innerWidth <= 768) {
            setViewMobile(true);
        } else {
            setViewMobile(false);
        }
    };

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setViewMobile(true);
        } else {
            setViewMobile(false);
        }
    }, []);

    return (
        <>
            <SectionTitle
                tag="How"
                title="시선흐름을 통해 독해력을 측정하고 교육합니다."
                subText="시선흐름 자체 알고리즘을 통하여 독해력 측정이 가능합니다."
            />
            <div className="subs-root">
                <Fade
                    left={viewMobile ? false : true}
                    top={viewMobile ? true : false}
                    distance={'4rem'}
                    duration={666}
                    fraction={viewMobile ? 0.5 : 0.7}
                >
                    <div className="step-card container">
                        <StepCard
                            step="step1"
                            icon={ImgStep1}
                            title="시선흐름 알고리즘"
                            text="시선흐름 알고리즘을 통해 시선 데이터 7가지 항목 추출"
                        />
                        <StepCard step="step2" icon={ImgStep2} title="유형별 정확한 측정" text="자체 제작 문제를 통한 유형별 정답률 측정" />
                        <StepCard
                            step="step3"
                            icon={ImgStep3}
                            title="시선흐름 분석"
                            text="시선흐름과 문제 유형별 정답률 간의 상관관계 분석"
                        />
                        <StepCard step="step4" icon={ImgStep4} title="AI 알고리즘" text="AI 알고리즘을 통한 독해력 8가지 요소 수치화" />
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default React.memo(Section5);
