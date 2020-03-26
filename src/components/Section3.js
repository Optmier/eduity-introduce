import React from 'react';
import '../styles/section3.scss';
import ContentView from './ContentView';
import classNames from 'classnames';
import SectionWrapper from '../components/SectionWrapper';
import vision from './svgs/vision.svg';
import analytics from './svgs/analytics.svg';
import teacher from './svgs/teacher.svg';
import { Fade } from 'react-reveal';
import { strings } from '../datas/strings';

const { intro_section_3 } = strings;

function Section3() {
    const datas = [
        {
            highligt: 'Strategic',
            title: intro_section_3[2][window.lang],
            content: '',
            img: '',
        },
        {
            title: intro_section_3[3][window.lang],
            content: '',
            img: '',
        },
        {
            title: intro_section_3[4][window.lang],
            content: '',
            img: '',
        },
    ];

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    };
    const style2 = {
        // width: '18%',
    };
    return (
        <SectionWrapper no={3} coverImage="bgcover3" marginBottom={64} height="160px">
            <div className="responsive">
                <div className="header">
                    <Fade bottom distance="72px" duration={800} fraction={1}>
                        <div className={classNames(window.lang, 'header-font')}>{intro_section_3[0][window.lang]} 'Pierce'</div>
                    </Fade>
                    <Fade bottom distance="72px" duration={800} fraction={1}>
                        <div className={classNames(window.lang, 'desc-font')}>{intro_section_3[1][window.lang]}</div>
                    </Fade>
                </div>

                <div className="desc">
                    {window.innerWidth < 768 ? (
                        <div style={style}>
                            {datas.map((i, key) => (
                                <Fade duration={500} key={key} fraction={0.666}>
                                    <div className="card-wrapper" key={key} style={style2}>
                                        <ContentView content={i.content} img={i.img}>
                                            {i.title}
                                        </ContentView>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    ) : (
                        <Fade bottom cascade distance="96px" duration={800} fraction={0.666}>
                            <div style={style}>
                                {datas.map((i, key) => (
                                    <div className="card-wrapper" key={key} style={style2}>
                                        <ContentView content={i.content} img={i.img}>
                                            {i.title}
                                        </ContentView>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Section3;
