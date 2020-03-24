import React from 'react';
import { Fade } from 'react-reveal';

function BackgroundCover({ height, minHeight, minHeightMargin }) {
    return (
        <Fade duration={666} fraction={0.3}>
            <div className="image-cover" style={{ height: height, minHeight: `${minHeight + minHeightMargin}px` }}></div>
        </Fade>
    );
}

export default React.memo(BackgroundCover);
