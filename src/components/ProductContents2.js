import React from 'react';
import { strings } from '../datas/strings';

const { product } = strings;

function ProductContents() {
    return (
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
    );
}

export default ProductContents;
