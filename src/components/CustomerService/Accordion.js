import React, { useState, useEffect } from 'react';
import * as $ from 'jquery';
import FAQData from '../../datas/FAQData.json';
import NoticeData from '../../datas/NoticeData.json';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
import '../../styles/cs_accordion.scss';
import { Element } from 'react-scroll';

function Accordion({ cusomerService, questionNum }) {
    function AccordionItem({ id, paragraph, title, date }) {
        const [opened, setOpened] = useState(false);
        console.log(id, questionNum);

        if (questionNum === '1') {
            id += 7;
        } else if (questionNum === '2') {
            id += 10;
        }

        return (
            <>
                <Element name={'hidden_' + id} style={{ position: 'absolute', top: -80 }} />
                <div
                    className={classNames('accordion-item', { 'accordion-item--opened': opened })}
                    onClick={() => {
                        setOpened(!opened);
                    }}
                >
                    <input style={{ width: '0', height: 0, padding: 0, margin: 0, outline: 'none', border: 'none' }} id={'hidden_' + id} />
                    <div className="accordion-item__line">
                        <h3 className="accordion-item__title">{title}</h3>

                        {cusomerService === 'faq' ? '' : <span className="accordion-item__day">{date}</span>}
                        <span className="accordion-item__icon" />
                    </div>
                    <div className="accordion-item__inner">
                        <div className="accordion-item__content">
                            <p className="accordion-item__paragraph">{ReactHtmlParser(paragraph)}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <ul className="accordion-list">
            {cusomerService === 'faq'
                ? Object.keys(FAQData[questionNum]).map((k, idx) => (
                      <li key={idx} {...{ className: 'accordion-list__item' }} style={{ position: 'relative' }}>
                          <AccordionItem
                              id={idx}
                              questionNum={questionNum}
                              cusomerService={cusomerService}
                              title={FAQData[questionNum][k].title}
                              paragraph={FAQData[questionNum][k].paragraph}
                          />
                      </li>
                  ))
                : Object.keys(NoticeData[questionNum]).map((k, idx) => (
                      <li key={idx} {...{ className: 'accordion-list__item' }} style={{ position: 'relative' }}>
                          <AccordionItem
                              id={idx}
                              questionNum={questionNum}
                              cusomerService={cusomerService}
                              title={NoticeData[questionNum][k].title}
                              paragraph={NoticeData[questionNum][k].paragraph}
                              date={NoticeData[questionNum][k].date}
                          />
                      </li>
                  ))}
        </ul>
    );
}

Accordion.defaultProps = {
    cusomerService: 'faq',
    questionNum: '0',
};

export default React.memo(Accordion);
