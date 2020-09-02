import React from 'react';

function SectionFrame({ id, widthLimited, children }) {
    return (
        <section id={id} className="root">
            {widthLimited ? <div className="wrapper">{children}</div> : <div className="no-wrapper">{children}</div>}
        </section>
    );
}

SectionFrame.defaultProps = {
    id: 'no_id',
    widthLimited: true,
};

export default React.memo(SectionFrame);
