import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import '../styles/tech.scss';
import { strings } from '../datas/strings';

const { tech } = strings;

function Tech() {
    useEffect(() => {
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    return (
        <div className="tech-root">
            <div className="responsive">
                <div className="tech-contents">
                    <div className="header">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <div className="title">
                                    <p>{tech.tech_1.title[window.lang]}</p>
                                </div>
                                <div className="strong">
                                    <p>{tech.tech_1.strong[window.lang]}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="right-container">
                                    <video controls>
                                        <source src="/videos/eyetraking_demo.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="contents">
                        <p className="label">{tech.label_problem[window.lang]}</p>
                        <p>{tech.tech_1.p_1[window.lang]}</p>
                        <p>{tech.tech_1.p_2[window.lang]}</p>
                        <p>{tech.tech_1.p_3[window.lang]}</p>
                        <p className="label">{tech.label_solution[window.lang]}</p>
                        <p>{tech.tech_1.s_1[window.lang]}</p>
                        <p>{tech.tech_1.s_2[window.lang]}</p>
                    </div>
                </div>
                <div className="tech-contents">
                    <div className="header">
                        <div className="title">
                            <p>{tech.tech_2.title[window.lang]}</p>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <div className="strong">
                                    <p>{tech.tech_2.strong[window.lang]}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="right-container">
                                    <div className="right-image"></div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="contents">
                        <p className="label">{tech.label_problem[window.lang]}</p>
                        <p>{tech.tech_2.p_1[window.lang]}</p>
                        <p>{tech.tech_2.p_2[window.lang]}</p>
                        <p>{tech.tech_2.p_3[window.lang]}</p>
                        <p>{tech.tech_2.p_4[window.lang]}</p>
                        <p className="label">{tech.label_solution[window.lang]}</p>
                        <p>{tech.tech_2.s_1[window.lang]}</p>
                        <p>{tech.tech_2.s_2[window.lang]}</p>
                        <p>{tech.tech_2.s_3[window.lang]}</p>
                    </div>
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
    );
}

export default Tech;
