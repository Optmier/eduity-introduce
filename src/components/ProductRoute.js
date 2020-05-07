import React, { useState, useEffect } from 'react';
import ProductContents1 from '../components/ProductContents1';
import ProductContents2 from '../components/ProductContents2';
import ProductContents3 from '../components/ProductContents3';
import ProductContents4 from '../components/ProductContents4';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
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

    const titles = ['맞춤형 솔루션', '1대 1 튜터링', '해외 입시 컨설팅', '맞춤형 기획 서비스'];
    const [contentId, setContentId] = useState(1);
    const [flag, setFlag] = useState(1);
    const [title, setTitle] = useState(titles[1]);
    const handle = (e) => {
        let id = parseInt(e.target.id);
        setContentId(id);
        setFlag(id);
    };
    const handleMoblie = (e) => {
        let id = e.target.id;

        if (id === 'right') {
            if (contentId >= 3) {
                setContentId(1);
                setFlag(1);
                setTitle(titles[1]);
            } else {
                setContentId(contentId + 1);
                setFlag(flag + 1);
                setTitle(titles[flag + 1]);
            }
        } else if (id === 'left') {
            if (contentId <= 1) {
                setContentId(3);
                setFlag(3);
                setTitle(titles[3]);
            } else {
                setContentId(contentId - 1);
                setFlag(flag - 1);
                setTitle(titles[flag - 1]);
            }
        }
    };

    const getStepContent = (contentId) => {
        switch (contentId) {
            case 0:
                return <ProductContents1></ProductContents1>;
            case 1:
                return <ProductContents2></ProductContents2>;
            case 2:
                return <ProductContents3></ProductContents3>;
            case 3:
                return <ProductContents4></ProductContents4>;
            default:
                document.location.reload();
        }
    };

    return (
        <>
            <div className="responsive">
                {width >= 769 ? (
                    <div className="main-contents">
                        <div className="subRoute">
                            <ul>
                                <li className={classNames('listStyle', { able: flag === 1 })} id="1" onClick={handle}>
                                    <span>01</span>1대1 튜터링
                                </li>
                                <li className={classNames('listStyle', { able: flag === 2 })} id="2" onClick={handle}>
                                    <span>02</span>해외 입시 컨설팅
                                </li>
                                <li className={classNames('listStyle', { able: flag === 3 })} id="3" onClick={handle}>
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
                        <div className="subRoute">
                            <button id="left" onClick={handleMoblie}>
                                <AiOutlineLeft size={24} color={'white'} style={{ pointerEvents: 'none' }}></AiOutlineLeft>
                            </button>
                            <p className="header-font">{title}</p>
                            <button id="right" onClick={handleMoblie}>
                                <AiOutlineRight size={24} color={'white'} style={{ pointerEvents: 'none' }}></AiOutlineRight>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="getStepContent">
                <div className="responsive">{getStepContent(contentId)}</div>
            </div>
        </>
    );
}

export default ProductRoute;
