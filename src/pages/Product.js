import React, { useState, useEffect } from 'react';
import '../styles/product.scss';
import { strings } from '../datas/strings';
import ContentView from '../components/ContentView';
import teacher2 from '../components/svgs/teacher2.svg';
import studying from '../components/svgs/studying.svg';
import university from '../components/svgs/university.svg';
import ProductContents1 from '../components/ProductContents1';
import ProductContents2 from '../components/ProductContents2';
import ProductContents3 from '../components/ProductContents3';
import ProductContents4 from '../components/ProductContents4';

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

    const [id, setId] = useState('0');
    const handle = e => {
        let id = e.target.id;
        console.log(typeof id);

        setId(id);
    };
    const getStepContent = id => {
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
                throw new Error('Unknown step');
        }
    };
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
                            <li id="0" onClick={handle}>
                                a
                            </li>
                            <li id="1" onClick={handle}>
                                b
                            </li>
                            <li id="2" onClick={handle}>
                                c
                            </li>
                            <li id="3" onClick={handle}>
                                d
                            </li>
                        </ul>
                    </div>
                    {getStepContent(id)}
                </div>
            </div>
        </div>
    );
}

export default Product;
