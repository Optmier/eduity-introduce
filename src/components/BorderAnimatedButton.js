import React from 'react';
import '../styles/border_animated_button.scss';

function BorderAnimatedButton({ darker, filled, children }) {
    return (
        <div className="border-animated-button">
            <div className={`${darker ? (filled ? 'dark' : 'dark2') : 'light'}-button button-wrapper`}>
                <div className="button">
                    <span>{children}</span>
                </div>
            </div>
        </div>
    );
}

BorderAnimatedButton.defaultProps = {
    darker: false,
    filled: false,
};

export default React.memo(BorderAnimatedButton);
