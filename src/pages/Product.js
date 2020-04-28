import React, { useState, useEffect } from 'react';
import '../styles/product.scss';
import { strings } from '../datas/strings';
import ContentView from '../components/ContentView';
import Teacher from '../components/svgs/teacher2';
import Studying from '../components/svgs/studying';
import University from '../components/svgs/university';
import ProductContents1 from '../components/ProductContents1';
import ProductContents2 from '../components/ProductContents2';
import ProductContents3 from '../components/ProductContents3';
import ProductContents4 from '../components/ProductContents4';
import ProductReasons from '../components/ProductReasons';
import classNames from 'classnames';
import { Fade } from 'react-reveal';

const { product } = strings;

function Product() {
    useEffect(() => {
        window.analytics.logEvent('제폼 페이지 접속');
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    const datas = [
        {
            title: product.top_items.item_1.title[window.lang],
            content: product.top_items.item_1.content[window.lang],
            img: <Teacher fill="white"></Teacher>,
        },
        {
            title: product.top_items.item_2.title[window.lang],
            content: product.top_items.item_2.content[window.lang],
            img: <Studying fill="white"></Studying>,
        },
        {
            title: product.top_items.item_3.title[window.lang],
            content: product.top_items.item_3.content[window.lang],
            img: <University fill="white"></University>,
        },
    ];

    const [id, setId] = useState('0');
    const [flag, setFlag] = useState({
        '0': true,
        '1': false,
        '2': false,
        '3': false,
    });

    const handle = (e) => {
        let id = e.target.id;
        setId(id);

        setFlag({
            ...!flag,
            [id]: true,
        });
    };

    const getStepContent = (id) => {
        // console.log(id);
        switch (id) {
            case '0':
                return <ProductContents1></ProductContents1>;
            case '1':
                return <ProductContents2></ProductContents2>;
            case '2':
                return <ProductContents3></ProductContents3>;
            case '3':
                return <ProductContents4></ProductContents4>;
            default:
                document.location.reload();
        }
    };

    const reasons_datas = [
        {
            title: (
                <p>
                    <span className="pointcolor">Eduity</span>는 <span className="pointcolor">소수정예</span>를 통한 1대1 밀착 학습 관리를
                    진행합니다.
                </p>
            ),
            img: <img src="/images/our_services.png" alt="서비스전체표" />,
            reverse: false,
        },
        {
            title: (
                <p>
                    <span className="pointcolor">Eduity</span>는 <span className="pointcolor">가격대비</span> 확실한 효과를 보장합니다.
                </p>
            ),
            img: <img src="/images/our_services.png" alt="서비스전체표" />,
            reverse: true,
        },
        {
            title: (
                <p>
                    <span className="pointcolor">Eduity</span>는 <span className="pointcolor">70%</span>의 <br></br>합격률을 자랑합니다.
                </p>
            ),
            img: <img src="/images/chart배경.png" alt="chart" />,
            reverse: false,
        },
    ];
    return (
        <>
            <div className="product-header-contents ">
                <Fade bottom cascade distance="120px" duration={1000} fraction={0.9}>
                    <div>
                        <h4>
                            당신만을 위한 맞춤형 영어 학습, <br></br>에듀이티와 함께해보세요.
                        </h4>
                        <p>Eduity for Infinite Pioneer</p>
                    </div>
                </Fade>
            </div>
            <div className="product-root">
                <div className="responsive">
                    <div className="top-contents">
                        <div className="top-contents-header">
                            <div className="en header-font">Why Eduity?</div>
                            <div className="ko desc-font ">에듀이티는 교육과 기술의 장점을 활용하여 학습자의 영어학습효과를 높입니다.</div>
                        </div>

                        <div className="reasons-container">
                            {reasons_datas.map((i, key) => (
                                <ProductReasons
                                    key={key}
                                    reverse={i.reverse}
                                    title={i.title}
                                    content={i.content}
                                    img={i.img}
                                ></ProductReasons>
                            ))}
                        </div>

                        {/* <div className="items">
                            <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
                                <div className="card-fade">
                                    {datas.map((i, key) => (
                                        <div key={key}>
                                            <ContentView content={i.content} img={i.img}>
                                                {i.title}
                                            </ContentView>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        </div> */}
                    </div>

                    <div className="main-contents">
                        <div className="subRoute">
                            <ul>
                                <li className={classNames('listStyle', { able: flag['0'] })} id="0" onClick={handle}>
                                    <span>01</span>맞춤형 솔루션
                                </li>
                                <li className={classNames('listStyle', { able: flag['1'] })} id="1" onClick={handle}>
                                    <span>02</span>1대1 튜터링
                                </li>
                                <li className={classNames('listStyle', { able: flag['2'] })} id="2" onClick={handle}>
                                    <span>03</span>해외 입시 컨설팅
                                </li>
                                <li className={classNames('listStyle', { able: flag['3'] })} id="3" onClick={handle}>
                                    <span>04</span> 맞춤형 기획 서비스
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="getStepContent">
                <div className="responsive">{getStepContent(id)}</div>
            </div>
        </>
    );
}

export default Product;
