import React from 'react';
import { Fade } from 'react-reveal';
import StepCheck from '../images/step_check.png';

const StepList = ({ subText }) => {
    return (
        <div className="step-list">
            <img style={{ width: '20px', height: '20px' }} src={StepCheck} alt="step_check" /> <h4>{subText}</h4>
        </div>
    );
};

function StepText({ tag, title, subTitle, subText1, subText2 }) {
    return (
        <div className="title-root" style={{ marginLeft: '1rem' }}>
            <p className="title-tags">{tag}</p>
            <h1 className="title">
                <div className="left-border" />
                {title}
            </h1>

            <div className="title-step-contents">
                <h3>{subTitle}</h3>
                <StepList subText={subText1} />
                <StepList subText={subText2} />
            </div>
        </div>
    );
}

StepText.defaultProps = {
    title: 'Title Normal',
    subText1: 'Sub Text',
    subText2: 'Sub Text',
};

export default React.memo(StepText);
