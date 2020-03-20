import React from 'react';
import { Grid } from '@material-ui/core';
import { Fade } from 'react-reveal';
import '../styles/section_contact_us.scss';
import SectionWrapper from './SectionWrapper';

function SectionContactUs() {
    return (
        <SectionWrapper height="64vh" no="-contact-us" coverImage="bgcover-contact-us" marginBottom={0} darker>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Fade left distance="72px" duration={800} fraction={1}>
                        <div className="intro-header en">
                            <p>Contact Us</p>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Fade right cascade distance="72px" duration={800} fraction={1}>
                        <div className="intro-content">
                            <p>전광휘</p>
                            <p>
                                <a href="tel:123-456-7890">123-456-7890</a>
                            </p>
                            <p>
                                <a href="mailto:khjeon1994@gmail.com">khjeon1994@gmail.com</a>
                            </p>
                            <p>서울 강남구 테헤란로 146 현익빌딩 12, 13층</p>
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </SectionWrapper>
    );
}

export default React.memo(SectionContactUs);
