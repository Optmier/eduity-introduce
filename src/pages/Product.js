import React, { useEffect } from 'react';
import '../styles/product.scss';
import { strings } from '../datas/strings';
import ContentView from '../components/ContentView';
import teacher2 from '../components/svgs/teacher2.svg';
import studying from '../components/svgs/studying.svg';
import university from '../components/svgs/university.svg';
import { NavLink, Route } from 'react-router-dom';
import ProductContents from '../components/ProductContents';

const { product } = strings;

function Product() {
    useEffect(() => {
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    const datas = [
        {
            title: product.top_items.item_1.title[window.lang],
            content: product.top_items.item_1.content[window.lang],
            img: teacher2,
        },
        {
            title: product.top_items.item_2.title[window.lang],
            content: product.top_items.item_2.content[window.lang],
            img: studying,
        },
        {
            title: product.top_items.item_3.title[window.lang],
            content: product.top_items.item_3.content[window.lang],
            img: university,
        },
    ];

    return (
        <div className="product-root">
            <div className="responsive">
                <div className="top-contents">
                    <div className="image-container">
                        <img src="/images/our_services.png" alt="서비스전체표" />
                    </div>
                    <div className="items">
                        {datas.map((i, key) => (
                            <ContentView content={i.content} img={i.img} key={key}>
                                {i.title}
                            </ContentView>
                        ))}
                    </div>
                </div>

                <div className="main-contents">
                    <div className="subRoute">
                        <ul>
                            <NavLink className="listStyle kr" to="/faq/01" activeClassName={'able'}>
                                <li>
                                    <span>01</span>지원 관련
                                </li>
                            </NavLink>
                            <NavLink className="listStyle kr" to="/faq/02" activeClassName={'able'}>
                                <li>
                                    <span>02</span>스터디 진행
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <Route path="/product/:id" exact component={ProductContents}></Route>
                </div>
            </div>
        </div>
    );
}

export default Product;
