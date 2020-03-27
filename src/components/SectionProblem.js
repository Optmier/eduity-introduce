import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/sectionProblem.scss';
import { strings } from '../datas/strings';

const { intro_section_problem } = strings;

function SectionProblem() {
    return (
        <div className="sec-bg">
            <div className="responsive SectionProblem">
                <div className="right">
                    <Fade left delay={333} distance="72px" duration={800} fraction={0.666}>
                        <img
                            src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt="img"
                        ></img>
                    </Fade>
                    <Fade left delay={333} distance="72px" duration={800} fraction={0.666}>
                        <p>​{intro_section_problem[0][window.lang]}</p>
                    </Fade>
                </div>

                <div className="left">
                    <Fade right delay={333} distance="72px" duration={800} fraction={0.666}>
                        <p>{intro_section_problem[1][window.lang]}</p>
                    </Fade>
                    <Fade right delay={333} distance="72px" duration={800} fraction={0.666}>
                        <p>{intro_section_problem[2][window.lang]}</p>
                    </Fade>
                    <Fade right delay={333} distance="72px" duration={800} fraction={0.666}>
                        <p>
                            {intro_section_problem[3].p1[window.lang]}
                            {intro_section_problem[3].p2[window.lang]}
                            {intro_section_problem[3].p3[window.lang]}​{intro_section_problem[3].p4[window.lang]}
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default SectionProblem;
