import React from 'react';
import ImgSolu1 from '../../images/main_sections/main_6-0.svg';
import ImgSolu2 from '../../images/main_sections/main_6-1.svg';
import ImgSolu3 from '../../images/main_sections/main_6-2.svg';
import SectionTitle from '../SectionTitle';
import '../../styles/main_section_6.scss';

function SolutionCard({ icon, title, text }) {
    return (
        <div className="solution-card">
            <div className="icon-container">
                <img src={icon} alt="solution icon..." />
            </div>
            <div className="text-container">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
            </div>
        </div>
    );
}

SolutionCard.defaultProps = {
    icon: null,
    title: 'Title',
    text: 'Text',
};

function Section6() {
    return (
        <>
            <SectionTitle
                tag="What"
                title="에듀이티는 3가지 솔루션을 제안합니다."
                subText="맞춤형 솔루션을 통해 진단부터 교육 그리고 큐레이팅 서비스를 제공합니다."
            />
            <div className="subs-root">
                <div className="solution-cards-root">
                    <SolutionCard
                        icon={ImgSolu1}
                        title="시선흐름 분석을 통한 객관적인 진단"
                        text="독해력 자동 수치화를 통해 즉각적인 진단을 받을 수 있습니다."
                    />
                    <SolutionCard
                        icon={ImgSolu2}
                        title="맞춤형 학습을 위한 AI 문제 추천 시스템"
                        text="부족한 영역에 대하여 문제 큐레이팅이 가능합니다."
                    />
                    <SolutionCard
                        icon={ImgSolu3}
                        title="실시간 교육이 가능한 1대1 화상교육"
                        text="시선흐름 패턴과 영어 학습에 관련해서 실시간 피드백이 가능합니다."
                    />
                </div>
            </div>
        </>
    );
}

export default Section6;
