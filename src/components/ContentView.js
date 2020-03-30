import React from 'react';
import '../styles/section3.scss';
import classNames from 'classnames';

function ContentView({ content, img, children }) {
    return (
        <div className={classNames(window.lang, 'cardView')}>
            <div className="card-img">{img}</div>
            <div className="card-title">{children}</div>
            <div className="card-content">{content}</div>
        </div>
    );
}

export default ContentView;
