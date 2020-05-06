import React, { useState, useEffect } from 'react';
import ProductContents1 from '../components/ProductContents1';
import ProductContents2 from '../components/ProductContents2';
import ProductContents3 from '../components/ProductContents3';
import ProductContents4 from '../components/ProductContents4';
import classNames from 'classnames';

let size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
};

function ProductRoute() {
    const [width, setWidth] = useState(size.width);
    const onResize = () => {
        let size = {
            width: window.innerWidth || document.body.clientWidth,
            height: window.innerHeight || document.body.clientHeight,
        };
        setWidth(size.width);
    };
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [width]);

    const [id, setId] = useState('1');
    const [flag, setFlag] = useState({
        '0': false,
        '1': true,
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

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs((slideIndex += n));
    }
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName('mySlides');
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        x[slideIndex - 1].style.display = 'block';
    }
    return (
        <>
            <div className="responsive">
                {width >= 769 ? (
                    <div className="main-contents">
                        <div className="subRoute">
                            <ul>
                                <li className={classNames('listStyle', { able: flag['1'] })} id="1" onClick={handle}>
                                    <span>01</span>1대1 튜터링
                                </li>
                                <li className={classNames('listStyle', { able: flag['2'] })} id="2" onClick={handle}>
                                    <span>02</span>해외 입시 컨설팅
                                </li>
                                <li className={classNames('listStyle', { able: flag['3'] })} id="3" onClick={handle}>
                                    <span>03</span> 맞춤형 기획 서비스
                                </li>
                                <li className={classNames('listStyle', { able: false })} /* id="0" */ /* onClick={handle} */>
                                    <span>04</span>맞춤형 솔루션<br></br>
                                    <span style={{ fontSize: 14 }}>(준비중*)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="main-contents-mobile">
                        <button onClick={plusDivs(-1)}>왼쪽</button>
                        <div className="subRoute">
                            <ul>
                                <li className={classNames('listStyle', { able: flag['1'] }, 'mySlides')} id="1" onClick={handle}>
                                    <span>01</span>1대1 튜터링
                                </li>
                                <li className={classNames('listStyle', { able: flag['2'] }, 'mySlides')} id="2" onClick={handle}>
                                    <span>02</span>해외 입시 컨설팅
                                </li>
                                <li className={classNames('listStyle', { able: flag['3'] }, 'mySlides')} id="3" onClick={handle}>
                                    <span>03</span> 맞춤형 기획 서비스
                                </li>
                                <li className={classNames('listStyle', { able: false })} /* id="0" */ /* onClick={handle} */>
                                    <span>04</span>맞춤형 솔루션<br></br>
                                    <span style={{ fontSize: 14 }}>(준비중*)</span>
                                </li>
                            </ul>
                        </div>
                        <button onClick={plusDivs(-1)}>오른쪽</button>
                    </div>
                )}
            </div>

            <div className="getStepContent">
                <div className="responsive">{getStepContent(id)}</div>
            </div>
        </>
    );
}

export default ProductRoute;
