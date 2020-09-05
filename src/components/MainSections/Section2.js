import React, { useState, useRef, useEffect } from 'react';
import { Fade, Zoom } from 'react-reveal';
import ImgItem1 from '../../images/main_sections/main_2-0.svg';
import ImgItem2 from '../../images/main_sections/main_2-1.svg';
import ImgItem3 from '../../images/main_sections/main_2-2.svg';
import ImgItem4 from '../../images/main_sections/main_2-3.svg';
import ImgDescriptorSymbor from '../../images/descriptor_head_symbol.svg';
import '../../styles/main_section_2.scss';

function Section2() {
    const [viewMobile, setViewMobile] = useState(true);
    const itemsRef = [useRef(), useRef(), useRef(), useRef()];
    const [activeItemNum, setActiveItemNum] = useState(0);
    const [activeDescNum, setActiveDescNum] = useState(4);
    const itemDescriptors = [
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>별도의 장치 없이, 노트북 웹캠을 활용한 시선 측정</h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>점수를 자동 수치화하여 빠른 결과 도출</h4>
                </div>
            </Fade>
            <Fade delay={400} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>빠른 시간 내의 객관적인 학습 진단 지표 제공</h4>
                </div>
            </Fade>
        </>,
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>시선흐름 추적을 통한 학습자 언어, 인지 능력과 문제 정답률의 상관관계 분석</h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>독해력 8가지 요소에 대한 AI기반 자동 점수 수치화</h4>
                </div>
            </Fade>
        </>,
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        <span>분석 시스템 Pierce</span> 의 학습 솔루션 분석 결과값을 활용하여 AI 분석
                    </h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>부진한 영역과 관련된 문제유형 문제 추천</h4>
                </div>
            </Fade>
        </>,
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        <span>실시간 화상 교육</span>을 통한 시선 흐름 및 문제풀이에 대한 교육 진행
                    </h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        실시간 피드백이 가능한 <span>1대1 맞춤형 교육</span> 진행
                    </h4>
                </div>
            </Fade>
        </>,
        <></>,
    ];
    const itemDescriptorsNoAnim = [
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>별도의 장치 없이, 노트북 웹캠을 활용한 시선 측정</h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>점수를 자동 수치화하여 빠른 결과 도출</h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>빠른 시간 내의 객관적인 학습 진단 지표 제공</h4>
            </div>
        </>,
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>시선흐름 추적을 통한 학습자 언어, 인지 능력과 문제 정답률의 상관관계 분석</h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>독해력 8가지 요소에 대한 AI기반 자동 점수 수치화</h4>
            </div>
        </>,
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    <span>분석 시스템 Pierce</span> 의 학습 솔루션 분석 결과값을 활용하여 AI 분석
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>부진한 영역과 관련된 문제유형 문제 추천</h4>
            </div>
        </>,
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    <span>실시간 화상 교육</span>을 통한 시선 흐름 및 문제풀이에 대한 교육 진행
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    실시간 피드백이 가능한 <span>1대1 맞춤형 교육</span> 진행
                </h4>
            </div>
        </>,
        <></>,
    ];
    const [items, setItems] = useState([
        {
            id: 0,
            ref: itemsRef[0],
            active: true,
            text: '시선흐름 측정',
            itemImg: ImgItem1,
        },
        {
            id: 1,
            ref: itemsRef[1],
            active: false,
            text: '8학습 진단',
            itemImg: ImgItem2,
        },
        {
            id: 2,
            ref: itemsRef[2],
            active: false,
            text: 'AI 문제 추천',
            itemImg: ImgItem3,
        },
        {
            id: 3,
            ref: itemsRef[3],
            active: false,
            text: '1:1 온라인 교육',
            itemImg: ImgItem4,
        },
    ]);

    const [selectorState, setSelectorState] = useState({
        translateX: 0,
        width: 1,
    });

    const handleOnItemClick = ({ target }) => {
        const { clientWidth, dataset } = target;
        const selectedId = dataset.id;
        const selectedElement = itemsRef[selectedId].current;

        setSelectorState({
            width: clientWidth,
            translateX: selectedElement.offsetLeft - items[0].ref.current.offsetLeft,
        });
        setItems(items.map((d, i) => ({ ...d, active: i == dataset.id })));
        setActiveItemNum(parseInt(selectedId));
        setActiveDescNum(4);
        setTimeout(() => {
            setActiveDescNum(parseInt(selectedId));
        }, 10);
        // setActiveDescNum(parseInt(selectedId));
    };

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
        setActiveDescNum(0);
        setSelectorState({
            ...selectorState,
            width: items[0].ref.current.clientWidth,
        });
    }, []);

    useEffect(() => {
        // setActiveDescNum(0);
        if (itemsRef[activeDescNum]) {
            setSelectorState({
                translateX: itemsRef[activeDescNum].current.offsetLeft - items[0].ref.current.offsetLeft,
                width: items[0].ref.current.clientWidth,
            });
        }
    }, [viewMobile]);

    return (
        <>
            <div className="title-root">
                <p className="title-tags lighter">Feature</p>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.5}>
                    <h1 className="title">에듀이티만의 차별화 된 대표기능 4가지로 새로운 영어교육을 만날 수 있습니다.</h1>
                </Fade>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.5}>
                    <h1 className="title mobile">에듀이티만의 차별화 된 대표기능 4가지</h1>
                </Fade>
            </div>
            <Fade delay={333} duration={666} fraction={1}>
                <div className="middle-buttons-root">
                    <div className="items">
                        <div
                            className="selector"
                            style={{ width: selectorState.width, transform: `translateX(${selectorState.translateX}px)` }}
                        ></div>
                        {items.map((d, i) => (
                            <div
                                key={i}
                                className={`item ${items[d.id].active ? 'active' : false}`}
                                data-id={d.id}
                                ref={d.ref}
                                onClick={handleOnItemClick}
                            >
                                <h4>{d.text}</h4>
                                <h4 className="mobile">{`0${d.id + 1}`}</h4>
                            </div>
                        ))}
                    </div>
                    <h3 className="mobile-item-title">{items[activeItemNum].text}</h3>
                </div>
            </Fade>
            <div className="subs-root">
                <div className="left-and-top">
                    <div className="item-descriptors">
                        {viewMobile ? itemDescriptorsNoAnim[activeItemNum] : itemDescriptors[activeDescNum]}
                    </div>
                </div>
                <div className="right-and-bottom">
                    {viewMobile ? (
                        <img src={items[activeItemNum].itemImg} />
                    ) : (
                        <Zoom delay={333} duration={666} fraction={0.333}>
                            <img src={items[activeItemNum].itemImg} />
                        </Zoom>
                    )}
                </div>
            </div>
        </>
    );
}

export default React.memo(Section2);
