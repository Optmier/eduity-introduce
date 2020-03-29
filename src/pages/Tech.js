import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import '../styles/tech.scss';
import { strings } from '../datas/strings';
import TechContents from '../components/TechContents';
import WhiteLogo from '../components/svgs/nav_logo_white.png';

const { tech } = strings;

function Tech() {
    useEffect(() => {
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    return (
        <>
            <div className="tech-header">
                <video loop autoPlay muted className="bg">
                    <source src="/videos/bg.mp4" type="video/mp4" />
                </video>
                <div className="content-box">
                    <img src={WhiteLogo} alt="whitelogo" />

                    <p>Eduity, for Infinite Pioneer</p>
                </div>
            </div>

            <div className="tech-root">
                <div className="responsive">
                    <div className="tech-contents">
                        <TechContents></TechContents>
                    </div>
                    <div className="tech-contents">
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={4}>
                                <img className="special-logo" src="/images/logo_matrios.png" alt="Matrios_Logo" />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <div className="special">
                                    <p>{tech.tech_3[window.lang]}</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tech;
