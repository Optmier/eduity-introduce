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

function CustomerServices({ history }) {
    let path = history.location.pathname;
    const [questionNum, setQuestionNum] = useState('0');
    const [searchVal, setSearchVal] = useState('');

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
                if (j.title === searchVal) {
                    setQuestionNum(i);
                    setTimeout(() => {
                        $('#hidden_' + idx).click();
                    }, 50);
                }
            }),
        );
    };
    const handleSearchNotice = () => {
        Object.keys(NoticeData).map((i) =>
            NoticeData[i].map((j, idx) => {
                if (j.title === searchVal) {
                    setTimeout(() => {
                        $('#hidden_' + idx).click();
                    }, 50);
                }
            }),
        );
    };
    return (
        <div style={{ minHeight: 'calc((100vh - 216px))' }}>
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
                    <Autocomplete
                        id="custom-input"
                        options={dataArr}
                        onChange={(event, newValue) => {
                            setSearchVal(newValue);
                        }}
                        renderInput={(params) => (
                            <div className="search-box" ref={params.InputProps.ref}>
                                <input type="text" {...params.inputProps} />
                                <button onClick={path === '/customer-service/notice' ? handleSearchNotice : handleSearchFAQ}>검색</button>
                            </div>
                        )}
                    />
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
