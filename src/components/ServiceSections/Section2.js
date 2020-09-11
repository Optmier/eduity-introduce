import React from 'react';
import { Fade } from 'react-reveal';
import '../../styles/service_section_2.scss';
import StepText from '../StepText';
import stepList from '../../datas/stepList.json';

/**
 * h1: 36px / 44px
 * h2: 32px / 42px
 * h3: 24px / 32px
 * h4: 18px / 24px
 * p: 16px
 */

function Section2() {
    return (
        <>
            {Object.keys(stepList).map((tag, idx) =>
                idx % 2 === 0 ? (
                    <div key={tag} className="subs-root">
                        <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.9}>
                            <div className="left-bottom container">
                                <StepText
                                    tag={tag}
                                    title={stepList[tag]['title']}
                                    subTitle={stepList[tag]['subTitle']}
                                    subText1={stepList[tag]['subText1']}
                                    subText2={stepList[tag]['subText2']}
                                />
                            </div>
                        </Fade>

                        <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.9}>
                            <div className="right-top container">
                                <img src={stepList[tag]['src']} alt="예시화면" />
                            </div>
                        </Fade>
                    </div>
                ) : (
                    <div key={tag} className="subs-root">
                        <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.9}>
                            <div className="right-top container">
                                <img src={stepList[tag]['src']} alt="예시화면" />
                            </div>
                        </Fade>
                        <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.9}>
                            <div className="left-bottom container">
                                <StepText
                                    tag={tag}
                                    title={stepList[tag]['title']}
                                    subTitle={stepList[tag]['subTitle']}
                                    subText1={stepList[tag]['subText1']}
                                    subText2={stepList[tag]['subText2']}
                                />
                            </div>
                        </Fade>
                    </div>
                ),
            )}
        </>
    );
}

export default React.memo(Section2);
