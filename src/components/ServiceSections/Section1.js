import React from 'react';
import '../../styles/service_section_1.scss';
import { Fade } from 'react-reveal';
import { withRouter } from 'react-router-dom';
/**
 * h1: 36px / 44px
 * h2: 32px / 42px
 * h3: 24px / 32px
 * h4: 18px / 24px
 * p: 16px
 */
function Section1({ history }) {
    return (
        <>
            <div className="left-and-top">
                <div className="contents">
                    <Fade bottom distance={'3rem'} delay={333} duration={666}>
                        <h1>
                            혁신적인 기술을 접목한 <br /> 맞춤형 학습 솔루션
                        </h1>
                    </Fade>
                    <Fade bottom distance={'3rem'} delay={666} duration={666}>
                        <h4>
                            에듀이티만의 시선흐름 AI 알고리즘을 통해
                            <br /> 영어의 장벽을 극복해보세요 !
                        </h4>
                    </Fade>

                    <Fade delay={1330} duration={1000}>
                        <div>
                            <button
                                type="button"
                                className="normal in-section no-op"
                                onClick={() => {
                                    history.push('/bookonline');
                                }}
                            >
                                무료체험하기
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="right-and-bottom">
                <Fade right distance={'4rem'} duration={666}>
                    <img src="/service_sections/service_1-0.png" alt="service in devices..." />
                </Fade>
            </div>
        </>
    );
}

export default React.memo(withRouter(Section1));
