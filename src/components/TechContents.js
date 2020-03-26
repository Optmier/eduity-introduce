import React from 'react';
import { Grid } from '@material-ui/core';
import { strings } from '../datas/strings';

const { tech } = strings;

function TechContents({ match }) {
    const { id } = match.params;

    return (
        <>
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
        </>
    );
}

export default TechContents;
