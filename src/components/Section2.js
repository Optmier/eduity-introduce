import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/section2.scss';
import SectionWrapper from '../components/SectionWrapper';

function Section2() {
    return (
        <SectionWrapper no={2} coverImage="bgcover2" marginBottom={64}>
            <Fade cascade bottom distance="72px" duration={800} fraction={1}>
                <div className="intro-header">
                    <p>Sample</p>
                    <p>Section</p>
                    <p>On</p>
                    <p>Here!</p>
                </div>
            </Fade>
            <Fade bottom distance="72px" duration={800} fraction={1}>
                <div className="intro-strong">
                    <p>Section 2 Strong</p>
                </div>
            </Fade>
            <Fade bottom distance="72px" duration={800} fraction={1}>
                <div className="intro-content">
                    <p>This area is for contents of section2</p>
                </div>
            </Fade>
        </SectionWrapper>
    );
}

export default React.memo(Section2);
