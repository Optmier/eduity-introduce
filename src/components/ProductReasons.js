import React from 'react';
import '../styles/product_reasons.scss';
import classNames from 'classnames';
import { Fade } from 'react-reveal';
import { useCountUp } from 'react-countup';

function ProductReasons({ title, content, img, reverse, counts }) {
    const useCountUps = [
        useCountUp({
            start: 0,
            end: 230,
            duration: 2,
        }),
        useCountUp({
            start: 0,
            end: 63,
            duration: 2,
            useEasing: false,
        }),
        useCountUp({
            start: 0,
            end: 2,
            duration: 2,
            useEasing: false,
        }),
        useCountUp({
            start: 0,
            end: 3,
            duration: 2,
            useEasing: false,
        }),
    ];

    return (
        <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
            <div>
                <div className={classNames('product-reasons', { 'flex-reverse': reverse })}>
                    <div className="left">
                        <div className="quote">
                            <img src="/images/quote.png" alt="큰따옴표" />
                        </div>

                        <div className="ko ment">{title}</div>

                        <div className="sub-ment">
                            <p>{content}</p>
                        </div>
                    </div>
                    <div className="right">
                        {counts ? (
                            <div className="count-up">
                                <Fade
                                    bottom
                                    fraction={1}
                                    onReveal={() => {
                                        useCountUps[0].start();
                                        useCountUps[1].start();
                                        useCountUps[2].start();
                                        useCountUps[3].start();
                                    }}
                                >
                                    <div className="count-ment">
                                        <p>
                                            SAT 평균 상승 <span className="count-pointcolor"> {useCountUps[0].countUp}점</span>
                                        </p>
                                    </div>
                                    <div className="count-ment">
                                        <p>
                                            입시 컨설팅 성공률 <span className="count-pointcolor"> {useCountUps[1].countUp}%</span>
                                        </p>
                                    </div>
                                    <div className="count-ment">
                                        <p>
                                            AMC 10 Honor Roll <span className="count-pointcolor"> {useCountUps[2].countUp}명</span>
                                        </p>
                                    </div>
                                    <div className="count-ment">
                                        <p>
                                            Digtinguished Honor Roll <span className="count-pointcolor"> {useCountUps[3].countUp}명</span>
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="image-container">{img}</div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
export default ProductReasons;
