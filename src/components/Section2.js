import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/section2.scss';
import SectionWrapper from '../components/SectionWrapper';
import { strings } from '../datas/strings';

const { intro_section_2 } = strings;

const Team = React.memo(function Team({ img, teamName, teamIntroduce, right }) {
    return (
        <Fade left={!right ? true : false} right={right ? true : false} distance="96px" duration={800} fraction={0.666}>
            <div className="team">
                {!right ? (
                    <>
                        <div
                            className="team-image"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        ></div>
                        <div className="team-text">
                            <div className="team-title">
                                <p>{teamName}</p>
                            </div>
                            <div className="team-intro">
                                <p>{teamIntroduce}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="team-text right">
                            <div className="team-title">
                                <p>{teamName}</p>
                            </div>
                            <div className="team-intro">
                                <p>{teamIntroduce}</p>
                            </div>
                        </div>
                        <div
                            className="team-image"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        ></div>
                    </>
                )}
            </div>
        </Fade>
    );
});

function Section2() {
    const datas = [
        {
            highligt: 'Strategic',
            title: intro_section_2[2][window.lang],
            content: intro_section_2[3][window.lang],
            img: '/images/team_cover_1.webp',
        },
        {
            title: intro_section_2[4][window.lang],
            content: intro_section_2[5][window.lang],
            img: '/images/team_cover_2.webp',
        },
        {
            title: intro_section_2[6][window.lang],
            content: intro_section_2[7][window.lang],
            img: '/images/team_cover_3.webp',
        },
    ];

    return (
        <SectionWrapper no={2} coverImage="bgcover2" marginBottom={64} darker>
            <Fade cascade bottom distance="72px" duration={800} fraction={1}>
                <div className="intro-header">
                    <p className="sub">{intro_section_2[0][window.lang]}</p>
                </div>
            </Fade>
            <div className="intro-content">
                <Fade bottom distance="72px" duration={800} fraction={1}>
                    <p>{intro_section_2[1][window.lang]}</p>
                </Fade>
                <div className="intro-teams">
                    {datas.map((i, key) => (
                        <Team img={i.img} teamName={i.title} teamIntroduce={i.content} right={key === 1 ? true : false} key={key}></Team>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

export default React.memo(Section2);
