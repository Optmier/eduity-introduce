import React, { useState, useEffect } from 'react';
import '../styles/product.scss';
import ProductReasons from '../components/ProductReasons';
import { Fade } from 'react-reveal';
import { findByLabelText } from '@testing-library/react';
import { Grid } from '@material-ui/core';
import SectionContactUs from '../components/SectionContactUs';
import ProductRoute from '../components/ProductRoute';

//const { product } = strings;

function Product() {
    useEffect(() => {
        window.analytics.logEvent('제폼 페이지 접속');
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    const reasons_datas = [
        {
            title: (
                <p>
                    <span className="pointcolor">Eduity</span>는 <span className="pointcolor">소수정예</span>를 통한 1대1 밀착 학습 관리를
                    진행합니다.
                </p>
            ),
            content: '시험 분야별 전문 강사와의 맞춤형 매칭부터 학생 수준별 교육 커리큘럼을 모두 제작하여 교육의 효율성을 극대화 시킵니다.',
            img: <img src="/images/our_services.png" alt="서비스전체표" />,
            reverse: false,
            counts: false,
        },
        {
            title: (
                <p>
                    <span className="pointcolor">Eduity</span>는 <span className="pointcolor">선택적</span> 가격제도를 실시합니다.
                </p>
            ),
            content: '필수커리큘럼만 교육하여 불필요한 가격을 삭제하여 가격의 투명성을 지향하며, 가격대비 확실한 효과를 보장합니다.',
            img: <img src="/images/price_news.png" alt="price_news" />,
            reverse: true,
            counts: false,
        },
        {
            title: (
                <p>
                    <span className="pointcolor">Eduity</span>는 <span className="pointcolor">63%</span>의 <br></br>합격률을 자랑합니다.
                </p>
            ),
            content: '경험이 많은 전문강사와 입시 컨선턴트의 협업을 통해 어학점수 향상과 목표 학교의 높은 합격률을 자랑합니다.',
            img: <img src="/images/chart배경.png" alt="chart" />,
            reverse: false,
            counts: true,
        },
    ];
    return (
        <>
            <div className="product-header-contents ">
                <Fade bottom cascade distance="120px" duration={1000} fraction={0.9}>
                    <div>
                        <h4>
                            당신만을 위한 맞춤형 영어 학습, <br></br>에듀이티와 함께해보세요.
                        </h4>
                        <p>Eduity for Infinite Pioneer</p>
                    </div>
                </Fade>
            </div>
            <div className="subitem-process-root">
                <div className="responsive">
                    {/* 새로 리뉴얼한 부분 - 세인*/}
                    <div className="sub-products">
                        <div className="sub-product-item-container">
                            <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
                                <div className="product-item-header">
                                    <div className="header-font">
                                        <span>01</span> 무료 상담 진행
                                    </div>
                                    <div className="desc-font ">
                                        본격적인 교육 및 컨설팅에 앞서 20분간의 전화 또는 대면 상담이 무상으로 진행됩니다.
                                    </div>
                                </div>
                            </Fade>
                            <div className="product-item-contents"></div>
                        </div>

                        <div className="sub-product-item-container">
                            <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
                                <div className="product-item-header">
                                    <div className="header-font">
                                        <span>02</span> 1대 1 맞춤형 교육
                                    </div>
                                    <div className="desc-font ">오직 소수만을 위한 1대 1 맞춤형 교육 시스템을 제공합니다.</div>
                                </div>
                                <div className="product-item-contents">
                                    <Grid container direction="row" justify="center" alignItems="center">
                                        <div className="content-card">
                                            <div className="card-title">어학시험</div>
                                            <div className="card-content">
                                                <div
                                                    style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}
                                                >
                                                    <div>
                                                        <p>SAT</p>
                                                        <p>TOFEL</p>
                                                        <p>AP 수학</p>
                                                        <p>AMC 10, 12</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-card">
                                            <div className="card-title">GPA관리</div>
                                            <div className="card-content">
                                                <div
                                                    style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}
                                                >
                                                    <div>
                                                        <p>과목 선정</p>
                                                        <p>과제 Support</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>
                            </Fade>
                        </div>

                        <div className="sub-product-item-container">
                            <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
                                <div className="product-item-header">
                                    <div className="header-font">
                                        <span>03</span> 진학 및 입시 컨설팅
                                    </div>
                                    <div className="desc-font ">에듀이티만의 밀착 관리 컨설팅 시스템을 만나보세요.</div>
                                </div>
                                <div className="product-item-contents">
                                    <Grid container direction="row" justify="center" alignItems="center">
                                        <div className="content-card">
                                            <div className="card-title">미국 보딩스쿨</div>
                                            <div className="card-content">
                                                <div
                                                    style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}
                                                >
                                                    <div>
                                                        <p>지원서</p>
                                                        <p>에세이</p>
                                                        <p>과외활동</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-card">
                                            <div className="card-title">국내 국제학교</div>
                                            <div className="card-content">
                                                <div
                                                    style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}
                                                >
                                                    <div>
                                                        <p>지원서</p>
                                                        <p>에세이</p>
                                                        <p>과외활동</p>
                                                        <p>인재상 설정</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-card">
                                            <div className="card-title">미국 대학</div>
                                            <div className="card-content">
                                                <div
                                                    style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}
                                                >
                                                    <div>
                                                        <p>지원서</p>
                                                        <p>에세이</p>
                                                        <p>과외활동</p>
                                                        <p style={{ fontSize: 14, fontWeight: 500 }}>
                                                            (아이비리그 합격자<br></br>포트폴리오 무상 제공*)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    {/* 새로 리뉴얼한 부분 - 세인 */}
                </div>
            </div>
            <SectionContactUs />
            <div className="product-root">
                <div className="responsive">
                    <div className="top-contents">
                        <div className="top-contents-header">
                            <div className="header-font">Why Eduity?</div>
                            <div className="desc-font ">에듀이티는 교육과 기술의 장점을 활용하여 학습자의 영어학습효과를 높입니다.</div>
                        </div>

                        <div className="reasons-container">
                            {reasons_datas.map((i, key) => (
                                <ProductReasons
                                    key={key}
                                    reverse={i.reverse}
                                    title={i.title}
                                    content={i.content}
                                    img={i.img}
                                    counts={i.counts}
                                ></ProductReasons>
                            ))}
                        </div>

                        {/* <div className="items">
                            <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
                                <div className="card-fade">
                                    {datas.map((i, key) => (
                                        <div key={key}>
                                            <ContentView content={i.content} img={i.img}>
                                                {i.title}
                                            </ContentView>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="product-root-subRoute">
                <ProductRoute></ProductRoute>
            </div>
        </>
    );
}

export default Product;
