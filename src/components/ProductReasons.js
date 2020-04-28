import React from 'react';
import '../styles/product_reasons.scss';
import classNames from 'classnames';
import { Fade } from 'react-reveal';

function ProductReasons({ title, content, img, reverse }) {
    return (
        <Fade bottom cascade distance="120px" duration={1000} fraction={0.5}>
            <div>
                <div className={classNames('product-reasons', { 'flex-reverse': reverse })}>
                    <div className="left">
                        <div className="quote">
                            <img src="/images/quote.png" alt="큰따옴표" />
                        </div>

                        <div className="ko ment">{title}</div>

                        <div className="sub-ment">
                            <p>{content}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image-container">{img}</div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
export default ProductReasons;
