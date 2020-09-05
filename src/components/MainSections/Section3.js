import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';
import ImgCompare1 from '../../images/main_sections/main_3-0.svg';
import ImgCompare2 from '../../images/main_sections/main_3-1.svg';
import '../../styles/main_section_3.scss';

function CompareGraph({ valueLeft, maxLeft, valueRight, maxRight, category, unit }) {
    const percentLeft = (valueLeft / maxLeft / 2) * 100;
    const percentRight = (valueRight / maxRight / 2) * 100;
    const [vL, setVL] = useState(valueLeft);
    const [vR, setVR] = useState(valueRight);

    useEffect(() => {}, [valueLeft]);

    return (
        <div className="graph-components">
            <div className="bar left" style={{ width: percentLeft + '%' }}>
                <h3>
                    <CountUp end={valueLeft} duration={1.3} />
                    {unit}
                </h3>
            </div>
            <div className="center-root">
                <div className="center">
                    <div className="inner">
                        <h3>{category}</h3>
                    </div>
                </div>
            </div>
            <div className="bar right" style={{ width: percentRight + '%' }}>
                <h3>
                    <CountUp end={valueRight} duration={1.3} />
                    {unit}
                </h3>
            </div>
        </div>
    );
}

CompareGraph.defaultProps = {
    valueLeft: 35,
    valueRight: 50,
    maxLeft: 100,
    maxRight: 100,
    category: '카테고리',
    unit: '%',
};

function Section3() {
    const [fixationsL, setFixationsL] = useState(16);
    const [fixationsR, setFixationsR] = useState(16);
    const [regressionsL, setRegressionsL] = useState(2);
    const [regressionsR, setRegressionsR] = useState(1);
    const [durationsL, setDurationsL] = useState(16);
    const [durationsR, setDurationsR] = useState(16);
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
            <div className="title-root">
                <p className="title-tags">Topic</p>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.7}>
                    <h1 className="title">
                        <div className="left-border" />
                        당신은 올바른 독해를 하고 계십니까?
                    </h1>
                    <h1 className="title mobile">
                        <div className="left-border" />
                        당신은 올바른 독해를 하고 계십니까?
                    </h1>
                    <h4 className="sub-text">
                        독해를 잘하는 학생과 못하는 학생의 독해력 비교 분석으로 시선흐름 측정의 장점을 확인해보세요.
                    </h4>
                </Fade>
            </div>
            <div className="subs-root">
                <div className="comparable-images-root">
                    <Fade bottom distance={'4rem'} duration={666} fraction={0.5}>
                        <div className="left container">
                            <img src={ImgCompare1} alt="left img..." />
                            <h3>
                                독해를 <span>못하는 학생</span>
                            </h3>
                        </div>
                    </Fade>
                    <Fade bottom distance={'4rem'} delay={400} duration={666} fraction={0.5}>
                        <div className="right container">
                            <img src={ImgCompare2} alt="right img..." />
                            <h3>
                                독해를 <span>잘하는 학생</span>
                            </h3>
                        </div>
                    </Fade>
                </div>
                <div className="comparable-graphs-root">
                    <CompareGraph
                        valueLeft={fixationsL}
                        valueRight={fixationsR}
                        maxLeft={460}
                        maxRight={320}
                        category="응시점 개수"
                        unit="개"
                    />
                </div>
                <div className="comparable-graphs-root">
                    <CompareGraph
                        valueLeft={regressionsL}
                        valueRight={regressionsR}
                        maxLeft={16}
                        maxRight={7.5}
                        category="재응시 횟수"
                        unit="회"
                    />
                </div>
                <div className="comparable-graphs-root">
                    <CompareGraph
                        valueLeft={durationsL}
                        valueRight={durationsR}
                        maxLeft={500}
                        maxRight={300}
                        category="평균 응시 시간"
                        unit={viewMobile ? 'ms' : '밀리초'}
                    />
                </div>
                <Fade
                    className="trigger graph"
                    onReveal={() => {
                        setFixationsL(382);
                        setFixationsR(203);
                        setRegressionsL(12);
                        setRegressionsR(4);
                        setDurationsL(500);
                        setDurationsR(205);
                    }}
                ></Fade>
                <div className="banner-root">
                    <div className="left-top">
                        <h2>올바른 시선 유도</h2>
                    </div>
                    <div className="right-bottom">
                        <p>
                            독해를 잘 하는 학생과 잘 하지 못하는 학생은 위 그림과 같이 안구의 움직임에서 확연한 차이를 보입니다. 독해를
                            잘하는 학생들은 안구 운동을 최소화하여 움직입니다.
                        </p>
                        <p>
                            <span>에듀이티는 이러한 안구 운동에 대한 객관적인 지표를 제시하며, 올바른 시선으로 유도합니다.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(Section3);
