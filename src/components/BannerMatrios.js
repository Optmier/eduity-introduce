import React from 'react';
import ImgLogoMatrios from '../images/banners/logo_matrios.png';
import '../styles/banner_matrios.scss';
import { Fade } from 'react-reveal';

function BannerMatrios() {
    return (
        <div className="banner-matrios-root">
            <Fade duration={666} fraction={0.5}>
                <div className="paper">
                    <Fade top distance={'8rem'} duration={666} delay={100} fraction={1}>
                        <div className="company-logo-container">
                            <img src={ImgLogoMatrios} alt="company logo..." />
                        </div>
                    </Fade>
                    <div className="company-promo-container">
                        <Fade left distance={'16rem'} duration={666} delay={400} fraction={0.9}>
                            <h2 className="title">에듀이티는 시선 추적 기술 스타트업 매트리오즈와 함께합니다.</h2>
                        </Fade>
                        <Fade right distance={'16rem'} duration={666} delay={700} fraction={0.9}>
                            <p className="text">
                                별도의 장비 없이 일반적인 노트북 웹캠, 스마트폰으로 구동 가능한 인공지능 시선 추적 원천기술과 특허 보유
                            </p>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default BannerMatrios;
