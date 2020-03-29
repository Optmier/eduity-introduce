import React from 'react';
import '../styles/section3.scss';
import ContentView from './ContentView';
import classNames from 'classnames';
import SectionWrapper from '../components/SectionWrapper';
import vision from './svgs/vision.svg';
import analytics from './svgs/analytics.svg';
import teacher from './svgs/teacher.svg';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Button, Grid, withStyles } from '@material-ui/core';
import { FaChevronRight } from 'react-icons/fa';
import { strings } from '../datas/strings';
import BorderAnimatedButton from './BorderAnimatedButton';

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

    const MoreButton = withStyles(theme => ({
        root: {
            backgroundColor: '#ffffff',
            color: '#00e099',
            border: '2px solid #ffffff',
            borderRadius: 4,
            fontFamily: window.lang === 'ko' ? 'Noto Sans KR, sans-serif' : 'Monsterrat, sans-serif',
            fontSize: '18px',
            width: '192px',
            height: '72px',

            '&:hover': {
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
            },
            '&:active': {
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
            },
            '&:focus': {
                // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        },
    }))(Button);

    return (
        <SectionWrapper no={3} coverImage="bgcover3" marginBottom={64} height="100%">
            <div className="responsive">
                <div className="header">
                    <Fade bottom distance="72px" duration={800} fraction={1}>
                        <div className={classNames(window.lang, 'header-font')}>{intro_section_3[0][window.lang]} 'Pierce'</div>
                    </Fade>
                    <Fade bottom distance="72px" duration={800} fraction={1}>
                        <div className={classNames(window.lang, 'desc-font')}>
                            {intro_section_3[1][window.lang]} <span>{intro_section_3[5][window.lang]}</span>{' '}
                            {intro_section_3[6][window.lang]}
                        </div>
                        <div className={classNames(window.lang, 'desc-font')}>
                            <span>
                                {intro_section_3[2][window.lang]}, {intro_section_3[3][window.lang]}, {intro_section_3[4][window.lang]}
                            </span>
                            {intro_section_3[7][window.lang]}
                        </div>
                    </Fade>
                    <Fade right distance="72px" duration={800} fraction={1}>
                        <div className="morebtn-wrapper">
                            {/* <MoreButton variant="contained">더 알아보기</MoreButton> */}
                            <Link to="/product">
                                <div className="icon">
                                    <FaChevronRight />
                                </div>
                                <div className="text">
                                    <span>더 알아보기</span>
                                </div>
                                {/* <BorderAnimatedButton darker>무료 교육 상담 신청</BorderAnimatedButton> */}
                            </Link>
                        </div>
                    </Fade>
                </div>

                {/* <div className="desc">
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
                </div> */}
            </div>
        </SectionWrapper>
    );
}

export default Section3;
