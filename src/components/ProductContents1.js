import React from 'react';
import { strings } from '../datas/strings';

const { product } = strings;

function ProductContents() {
    return (
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
    );
}

export default ProductContents;
