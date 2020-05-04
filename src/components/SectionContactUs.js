import React from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import '../styles/section_contact_us.scss';
import SectionWrapper from './SectionWrapper';
import BorderAnimatedButton from './BorderAnimatedButton';

function SectionContactUs() {
    const BookButton = withStyles((theme) => ({
        root: {
            color: 'white',
            border: '2px solid #ffffffa8',
            borderRadius: 4,
            fontFamily: "'Montserrat', 'Noto Sans KR'",
            fontSize: '18px',
            width: '192px',
            height: '72px',
            '&:hover': {
                backgroundColor: '#00e099',
                borderColor: '#00e099',
                // boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)',
                color: '#000000',
            },
            '&:active': {
                backgroundColor: '#00e099',
                borderColor: '#00e0993b',
                color: '#000000',
            },
        },
    }))(Button);

    return (
        <SectionWrapper height="192px" no="-contact-us" coverImage="bgcover-contact-us" marginBottom={0}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Fade left distance="72px" duration={800} fraction={1}>
                        <div className="left">
                            <p className="main">
                                <span>상담이</span> 필요하신가요?
                            </p>
                            <p className="sub">
                                에듀이티와 <span>프리미엄 무료 교육 상담</span>을 받아보세요.
                            </p>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Fade right distance="72px" duration={800} fraction={1}>
                        <div className="right">
                            <Link to="/bookonline">
                                {/* <BookButton variant="outlined">무료 교육 상담 신청</BookButton> */}
                                <BorderAnimatedButton darker>무료 교육 상담 신청</BorderAnimatedButton>
                            </Link>
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </SectionWrapper>
    );
}

export default React.memo(SectionContactUs);
