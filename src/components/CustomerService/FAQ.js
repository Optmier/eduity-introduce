import React from 'react';
import classNames from 'classnames';
import Accordion from './Accordion';

function FAQ({ questionNum, handleFAQ }) {
    return (
        <>
            <div className="faq-nav">
                <ul>
                    <li onClick={handleFAQ} id="0" className={classNames({ 'faq-able': questionNum === '0' })}>
                        기술 문의
                    </li>
                    <li onClick={handleFAQ} id="1" className={classNames({ 'faq-able': questionNum === '1' })}>
                        시험 문의
                    </li>
                    <li onClick={handleFAQ} id="2" className={classNames({ 'faq-able': questionNum === '2' })}>
                        결제/환불
                    </li>
                    <li style={{ color: 'white', width: 'calc(100% - 480px)', pointerEvents: 'none' }}>공백</li>
                </ul>
            </div>
            <div className="faq-accordian">
                <Accordion cusomerService="faq" questionNum={questionNum}></Accordion>
            </div>
        </>
    );
}

export default React.memo(FAQ);
