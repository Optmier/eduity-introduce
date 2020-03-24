import React, { useEffect } from 'react';
import '../styles/product.scss';
import { strings } from '../datas/strings';
import ContentView from '../components/ContentView';
import teacher2 from '../components/svgs/teacher2.svg';
import studying from '../components/svgs/studying.svg';
import university from '../components/svgs/university.svg';

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
                    <div className="logo">
                        <img src="logo.svg" alt="logo" />
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
                    <div className="contents">
                        <div className="title">
                            <p>{product.prods.item_1.title[window.lang]}</p>
                        </div>
                        <div className="strong">
                            <p>{product.prods.item_1.strong[window.lang]}</p>
                        </div>
                        <div className="content">
                            <p className="m">{product.prods.item_1.p_1[window.lang]}</p>
                            <p className="s">{product.prods.item_1.s_1[window.lang]}</p>
                            <p className="m">{product.prods.item_1.p_2[window.lang]}</p>
                            <p className="s">{product.prods.item_1.s_2[window.lang]}</p>
                            <p className="m">{product.prods.item_1.p_3[window.lang]}</p>
                            <p className="s">{product.prods.item_1.s_3[window.lang]}</p>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="title">
                            <p>{product.prods.item_2.title[window.lang]}</p>
                        </div>
                        <div className="strong">
                            <p>{product.prods.item_2.strong[window.lang]}</p>
                        </div>
                        <div className="content">
                            <p>{product.prods.item_2.p_1[window.lang]}</p>
                            <p>{product.prods.item_2.p_2[window.lang]}</p>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="title">
                            <p>{product.prods.item_3.title[window.lang]}</p>
                        </div>
                        <div className="strong">
                            <p>{product.prods.item_3.strong[window.lang]}</p>
                        </div>
                        <div className="content">
                            <p>{product.prods.item_3.p_1[window.lang]}</p>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="title">
                            <p>{product.prods.item_4.title[window.lang]}</p>
                        </div>
                        <div className="strong">
                            <p>{product.prods.item_4.strong[window.lang]}</p>
                        </div>
                        <div className="content">
                            <p>{product.prods.item_4.p_1[window.lang]}</p>
                            <p>{product.prods.item_4.p_2[window.lang]}</p>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="title">
                            <p>{product.prods.item_5.title[window.lang]}</p>
                        </div>
                        <div className="image-container">
                            <img src="/images/our_services.png" alt="서비스전체표" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
