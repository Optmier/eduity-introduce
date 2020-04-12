import React, { useEffect } from 'react';
import './styles/common.scss';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route } from 'react-router-dom';
import BookOnline from './pages/BookOnline';
import ScrollTop from './components/ScrollTop';
import About from './pages/About';
import Tech from './pages/Tech';
import Product from './pages/Product';
import { firebase } from './database/DBCtrl';

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ko');
    window.lang = 'ko';
}
window.lang = localStorage.getItem('lang');

window.analytics = firebase.analytics();
window.analytics.logEvent('사용자가 접속함');

function App() {
    const onUnload = () => {
        window.analytics.logEvent('접속 종료함');
    };

    useEffect(() => {
        window.addEventListener('unload', onUnload);
    }, []);

    return (
        <>
            <Nav optStatic={window.location.pathname === '/' ? false : true} />
            <Wrapper>
                <ScrollTop>
                    <Route path="/" component={Main} exact />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/tech" component={Tech} />
                    <Route path="/bookonline" component={BookOnline} />
                </ScrollTop>
            </Wrapper>
            <Footer optStatic={window.location.pathname === '/' ? false : true} />
        </>
    );
}

export default App;
