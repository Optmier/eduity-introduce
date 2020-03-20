import React from 'react';
import '../styles/section3.scss';
import ContentView from './ContentView';
import classNames from 'classnames';
import SectionWrapper from '../components/SectionWrapper';
import contentview1 from './svgs/contentview1.png';
import contentview2 from './svgs/contentview2.png';
import { Fade } from 'react-reveal';

const datas = [
    {
        highligt: 'Strategic',
        title: 'Strategic Planning Session',
        content: 'Expert Guidance',
        img: contentview1,
    },
    {
        title: 'Branding & Positioning Analysis',
        content: 'Grow Your Business',
        img: contentview2,
    },
    {
        title: 'Introductory Consultation',
        content: 'Achieve Your Goals',
        img: contentview1,
    },
];

function Section3() {
    const style = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    };
    const style2 = {
        width: '18%',
    };
    return (
        <SectionWrapper no={3} coverImage="bgcover3" marginBottom={64}>
            <div className="responsive">
                <div className="header">
                    <Fade bottom duration={800} fraction={1}>
                        <div className={classNames(window.lang, 'header-font')}>
                            <span className="mark">Eduity for Infinite Pioneer</span> Services
                        </div>
                    </Fade>
                    <Fade bottom duration={800} fraction={1}>
                        <div className={classNames(window.lang, 'desc-font')}>
                            Eduity for Infinite Pioneer exists to solve the critical issues facing our clients, both large and small. Our
                            unique approach is not only what differentiates us, but also what makes us successful. We provide a broad range
                            of services and solutions to help organizations facilitate change, achieve their vision and optimize performance
                            and productivity.
                        </div>
                    </Fade>
                </div>

                <div className="desc">
                    <Fade bottom cascade duration={800} fraction={1}>
                        <div style={style}>
                            {datas.map((i, key) => (
                                <div key={key} style={style2}>
                                    <ContentView content={i.content} img={i.img}>
                                        {i.title}
                                    </ContentView>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Section3;
