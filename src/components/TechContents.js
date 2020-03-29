import React from 'react';
import { strings } from '../datas/strings';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const { tech } = strings;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
}));

const CssTabs = withStyles({
    root: {
        fontFamily: ['Noto Sans KR', 'sans-serif'],
        fontSize: '20px',
    },
})(Tabs);

function TechContents() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <CssTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="시선 추적 기술" {...a11yProps(0)} />
                    <Tab label="AI 시선흐름 추천 기술" {...a11yProps(1)} />
                </CssTabs>
            </AppBar>

            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="tab-contents">
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
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="tab-contents">
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
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

export default TechContents;
