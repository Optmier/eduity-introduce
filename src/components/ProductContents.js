import React from 'react';
import { strings } from '../datas/strings';

const { product } = strings;

function ProductContents({ match }) {
    const { id } = match.params;

    return (
        <>
            <div className="contents">
                <div className="title">
                    <p>{`product.prods.item_${id}.title[window.lang]}`}</p>
                </div>
            </div>
        </>
    );
}

export default ProductContents;
