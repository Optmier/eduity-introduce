import React from 'react';
import { Fade } from 'react-reveal';
import ImgDescriptorSymbor from '../../images/descriptor_head_symbol.svg';
import '../../styles/main_section_4.scss';

function IntroCard({ color, title, items }) {
    return (
        <div className={`intro-card root ${color}`}>
            <div className="title-container">
                <h1 className="title-text">{title}</h1>
            </div>
            <div className="item-container">
                {items.map((item, i) => (
                    <div className="item" key={i}>
                        <div className="head-symbol">
                            <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                        </div>
                        <h4 className="item-text">{item}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

IntroCard.defaultProps = {
    color: 'primary',
    title: 'Title',
    items: ['item1', 'item2', 'item3'],
};

function Section4() {
    return (
        <>
            <div className="title-root">
                <p className="title-tags">Why</p>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.7}>
                    <h1 className="title">
                        <div className="left-border" />
                        에듀이티는 현 영어교육의 2가지 문제점을 해결하고자 합니다.
                    </h1>
                    <h1 className="title mobile">
                        <div className="left-border" />
                        에듀이티는 영어교육의 2가지 문제점을 해결하고자 합니다.
                    </h1>
                    <h4 className="sub-text">현 영어교육은 학습 진단 과정과 교육 방식에 문제가 있습니다.</h4>
                </Fade>
            </div>
            <div className="subs-root">
                <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}>
                    <div className="left-top container">
                        <IntroCard
                            color="primary"
                            title="학습자 진단 문제"
                            items={[
                                '강사 역량에 따른 주관적인 학습 진단',
                                '강사의 경험과 정답률에 의존하는 부정확한 진단',
                                '정확한 진단까지 오랜시간 소요',
                            ]}
                        />
                    </div>
                </Fade>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.9}>
                    <div className="right-bottom container">
                        <IntroCard
                            color="secondary"
                            title="교육 방식 문제"
                            items={[
                                '1:1 방식의 획일화된 교육',
                                '개별적 능력을 고려하지 않은 패키지 형식의 문제',
                                '학습자의 이해도 확인이 제한적이며, 일방적인 정보전달',
                            ]}
                        />
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default React.memo(Section4);
