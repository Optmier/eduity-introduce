import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import '../styles/tech.scss';
import { NavLink, Route } from 'react-router-dom';
import { strings } from '../datas/strings';
import TechContents from '../components/TechContents';

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
                <div className="tec-subRoute">
                    <ul>
                        <NavLink className="listStyle kr" to="/tech/01" activeClassName={'able'}>
                            <li>
                                <span>01</span>지원 관련
                            </li>
                        </NavLink>
                        <NavLink className="listStyle kr" to="/tech/02" activeClassName={'able'}>
                            <li>
                                <span>02</span>스터디 진행
                            </li>
                        </NavLink>
                    </ul>
                </div>

                <div className="tec-subRoute-contents">
                    <Route path="/tech/:id" exact component={TechContents}></Route>
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
