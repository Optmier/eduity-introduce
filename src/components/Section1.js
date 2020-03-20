import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/section1.scss';
import SectionWrapper from '../components/SectionWrapper';

function Section1() {
    return (
        <SectionWrapper no={1} coverImage="bgcover1" marginBottom={64} darker>
            <Fade cascade bottom distance="72px" delay={500} duration={800}>
                <div className="intro-header">
                    <p>Introducing</p>
                    <p>Eduity for</p>
                    <p>Infinite</p>
                    <p>Pioneer</p>
                </div>
            </Fade>
            <Fade bottom distance="72px" delay={800} duration={800}>
                <div className="intro-strong">
                    <p>Specialized Consulting</p>
                </div>
            </Fade>
            <Fade bottom distance="72px" delay={1100} duration={800}>
                <div className="intro-content">
                    <p>
                        Eduity for Infinite Pioneer offers a wide range of consulting services with the necessary tools and expertise to
                        help grow your business. We partner with our clients from start to finish, focusing on their needs while producing
                        new ideas, developing effective strategies and designing high quality and scalable solutions. Contact us to learn
                        more.
                    </p>
                </div>
            </Fade>
        </SectionWrapper>
    );
}

export default React.memo(Section1);
