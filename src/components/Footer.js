import React from 'react';
import { Grid } from '@material-ui/core';
import { Fade } from 'react-reveal';
import WhiteLogo from './svgs/nav_logo_white.png';
import '../styles/footer.scss';

function Footer() {
    return (
        <div className="footer-root">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={5}>
                    <Fade bottom distance="72px" duration={800} fraction={0.5}>
                        <div className="footer-logo">
                            <img src={WhiteLogo} alt="Go to home..." />
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Fade bottom distance="72px" duration={800} delay={200} fraction={0.5}>
                        <div className="footer-contents">
                            <p>
                                <span>대표이사 전광휘</span> | <span>사업자등록번호 000-00-00000</span>
                                <br></br>
                                서울 강남구 테헤란로 146 현익빌딩 12, 13층
                                <br></br>
                                <span>
                                    전화: <a href="tel:123-456-7890">123-456-7890</a>
                                </span>{' '}
                                |{' '}
                                <span>
                                    이메일: <a href="mailto:khjeon1994@gmail.com">khjeon1994@gmail.com</a>
                                </span>
                            </p>
                            <p>© 2020 by Eduity for Infinite Pioneer all right reserved.</p>
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    );
}

export default React.memo(Footer);
