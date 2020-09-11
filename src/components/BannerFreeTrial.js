import React from 'react';
import '../styles/banner_free_trial.scss';
import { withRouter } from 'react-router-dom';

function BannerFreeTrial({ history }) {
    return (
        <div className="banner-free-trial-root">
            <div className="text-promo-container">
                <h1>무료 체험을 진행해보세요!</h1>
                <h4>시선흐름을 통한 맞춤형 학습 솔루션을 무료로 체험해 보세요.</h4>
            </div>
            <div className="button-promo-container">
                <button
                    type="button"
                    className="normal in-section no-op"
                    onClick={() => {
                        history.push('/bookonline');
                    }}
                >
                    무료체험하기
                </button>
            </div>
        </div>
    );
}

export default withRouter(BannerFreeTrial);
