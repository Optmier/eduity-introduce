import React, { useState } from 'react';
import '../styles/customerService.scss';
import CustomerLink from '../components/CustomerService/CustomerLink';
import { Switch, Route, withRouter } from 'react-router-dom';
import Notice from '../components/CustomerService/Notice';
import FAQ from '../components/CustomerService/FAQ';
import Error404 from './Error404';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FiMail } from 'react-icons/fi';
import FAQData from '../datas/FAQData.json';
import NoticeData from '../datas/NoticeData.json';
import * as $ from 'jquery';
import { Link as AnimScrollTo } from 'react-scroll';

function CustomerServices({ history }) {
    let path = history.location.pathname;
    const [questionNum, setQuestionNum] = useState('0');
    const [searchVal, setSearchVal] = useState('');
    const [aniScroll, setAniScroll] = useState('hidden_0');

    let dataArr = [];

    if (path === '/customer-service/faq') {
        Object.keys(FAQData).map((i) => FAQData[i].map((j) => dataArr.push(j.title)));
    } else {
        Object.keys(NoticeData).map((i) => NoticeData[i].map((j) => dataArr.push(j.title)));
    }

    const handleFAQ = (e) => {
        const { id } = e.target;
        setQuestionNum(id);
    };

    const handleSearchFAQ = () => {
        Object.keys(FAQData).map((i) =>
            FAQData[i].map((j, idx) => {
                let hidden_num = idx;
                if (j.title === searchVal) {
                    if (i === '1') {
                        hidden_num += 7;
                    } else if (i === '2') {
                        hidden_num += 10;
                    }
                    setQuestionNum(i);
                    setTimeout(() => {
                        $('.accordion-item-scroll')[0].click();
                        $('#hidden_' + hidden_num).click();
                    }, 100);
                }
            }),
        );
    };
    const handleSearchNotice = () => {
        Object.keys(NoticeData).map((i) =>
            NoticeData[i].map((j, idx) => {
                if (j.title === searchVal) {
                    setTimeout(() => {
                        $('.accordion-item-scroll')[0].click();
                        $('#hidden_' + idx).click();
                    }, 100);
                }
            }),
        );
    };
    return (
        <div style={{ minHeight: 'calc((100vh - 216px))' }}>
            <AnimScrollTo className="accordion-item-scroll" to={aniScroll} spy={true} smooth={true} duration={700}></AnimScrollTo>

            <div className="customer-service-root">
                <div className="customer-container">
                    <div className="customer-header">
                        안녕하세요. <br /> 에듀이티 고객지원입니다. 무엇을 도와드릴까요?
                    </div>
                    <div className="customer-header-mobile">
                        안녕하세요. <br /> 에듀이티 고객지원입니다. <br />
                        무엇을 도와드릴까요?
                    </div>

                    <div className="customer-header-email">
                        <div>
                            서비스 관련 <FiMail style={{ marginRight: '0.6em', fontSize: '0.9em' }} /> khjeon1994@gmail.com
                        </div>
                        <div>
                            기술/개발 관련 <FiMail style={{ marginRight: '0.6em', fontSize: '0.9em' }} /> chyh1900@gmail.com
                        </div>
                    </div>

                    <div className="customer-header-menu">
                        <ul>
                            <CustomerLink path={'faq'} text={'자주 묻는 질문'} />
                            <CustomerLink path={'notice'} text={'공지사항'} />
                        </ul>
                    </div>
                </div>
                <div className="customer-header-search">
                    <div className="search-box">
                        <div style={{ width: '80%' }}>
                            <Autocomplete
                                id="custom-input"
                                options={dataArr}
                                onChange={(event, newValue) => {
                                    setSearchVal(newValue);
                                    setAniScroll('hidden_' + event.target.dataset.optionIndex);
                                    console.log(event.target.dataset.optionIndex, newValue);
                                }}
                                renderInput={(params) => (
                                    <div ref={params.InputProps.ref}>
                                        <input type="text" {...params.inputProps} />
                                    </div>
                                )}
                            />
                        </div>
                        <div
                            className="search-box-button"
                            onClick={path === '/customer-service/notice' ? handleSearchNotice : handleSearchFAQ}
                        >
                            검색
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-service-root" style={{ background: 'none', justifyContent: 'flex-start' }}>
                <div className="customer-subRoute-container">
                    <Switch>
                        <Route path="/customer-service/faq" exact render={() => <FAQ questionNum={questionNum} handleFAQ={handleFAQ} />} />
                        <Route path="/customer-service/notice" exact component={Notice} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default React.memo(withRouter(CustomerServices));
