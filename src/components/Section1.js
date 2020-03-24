import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/section1.scss';
import SectionWrapper from '../components/SectionWrapper';
import { strings } from '../datas/strings';

const { intro_section_1 } = strings;

function Section1() {
    return (
        <SectionWrapper no={1} coverImage="bgcover1" marginBottom={64} darker>
            <Fade cascade bottom distance="72px" delay={500} duration={800}>
                <div className="intro-header">
                    <p className="main">{intro_section_1[0][window.lang]}</p>
                    <p className="sub">{intro_section_1[1][window.lang]}</p>
                </div>
            </Fade>
            <Fade bottom distance="72px" delay={800} duration={800}>
                <div className="intro-strong">
                    <p>{intro_section_1[2][window.lang]}</p>
                </div>
            </Fade>
            <Fade bottom distance="72px" delay={1100} duration={800}>
                <div className="intro-content">
                    <p>{intro_section_1[3][window.lang]}</p>
                    <p>{intro_section_1[4][window.lang]}</p>
                </div>
            </Fade>
        </SectionWrapper>
    );
}

export default React.memo(Section1);
