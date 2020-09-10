import React from 'react';
import { Fade } from 'react-reveal';

function SectionTitle({ tag, subText, title, titleMobile }) {
    return (
        <div className="title-root">
            <p className="title-tags">{tag}</p>
            <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.7}>
                <h1 className="title">
                    <div className="left-border" />
                    {title}
                </h1>
                <h1 className="title mobile">
                    <div className="left-border" />
                    {title && !titleMobile ? title : titleMobile}
                </h1>
                <h4 className="sub-text">{subText}</h4>
            </Fade>
        </div>
    );
}

SectionTitle.defaultProps = {
    tag: 'Title Tag',
    title: 'Title Normal',
    // titleMobile: 'Title Mobile',
    subText: 'Sub Text',
};

export default React.memo(SectionTitle);
