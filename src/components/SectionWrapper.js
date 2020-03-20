import React, { useState, useRef, useEffect } from 'react';
import BackgroundCover from '../components/BackgroundCover';

function SectionWrapper({ no, height, coverImage, marginBottom, darker, children }) {
    const article = useRef();
    const [minHeight, updateMinHeight] = useState();
    const onResize = () => {
        updateMinHeight(article.current.clientHeight);
    };
    const onLoad = () => {
        updateMinHeight(article.current.clientHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        window.addEventListener('load', onLoad);
    }, []);

    return (
        <>
            <div
                className={`section-wrapper section${no} ${coverImage}`}
                style={{ height: height, minHeight: `${minHeight + marginBottom}px` }}
            >
                {darker ? <BackgroundCover height={height} minHeight={minHeight} minHeightMargin={marginBottom} /> : undefined}
                <article className={window.lang} ref={article}>
                    {children}
                </article>
            </div>
        </>
    );
}

SectionWrapper.defaultProps = {
    no: 0,
    height: '100vh',
    coverImage: false,
    marginBottom: 32,
    darker: false,
};

export default React.memo(SectionWrapper);
