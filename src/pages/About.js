import React, { useEffect } from 'react';
import '../styles/about.scss';
import { strings } from '../datas/strings';

const { about } = strings;

function About() {
    useEffect(() => {
        window.analytics.logEvent('About 페이지 접속');
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    return (
        <div className="about-root">
            <div className="responsive">
                {/* <div className="about-cover"></div> */}
                <div className="about-contents">
                    <div className="title">
                        <p>
                            {about.title[window.lang]}
                            <br></br>
                            {about.title_1[window.lang]}
                        </p>
                    </div>
                    <div className="strong">
                        <p>{about.strong[window.lang]}</p>
                    </div>
                    <div className="content">
                        <p>{about.content_p_1[window.lang]}</p>
                        <p>{about.content_p_2[window.lang]}</p>
                        <p>{about.content_p_3[window.lang]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
