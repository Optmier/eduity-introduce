import React from 'react';
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

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ko');
    window.lang = 'ko';
}
window.lang = localStorage.getItem('lang');

function App() {
    return (
        <>
            <Nav optStatic={window.location.pathname === '/' ? false : true} />
            <Wrapper>
                <ScrollTop>
                    <Route path="/" component={Main} exact />
                    <Route path="/about" component={About} />

                    <Route path="/product" component={Product} />
                    <Route path="/tech:id" component={Tech} />
                    <Route path="/bookonline" component={BookOnline} />
                </ScrollTop>
            </Wrapper>
            <Footer optStatic={window.location.pathname === '/' ? false : true} />
        </>
    );
}

export default App;
