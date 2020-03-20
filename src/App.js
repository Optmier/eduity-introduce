import React from 'react';
import './styles/common.scss';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route } from 'react-router-dom';

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ko');
    window.lang = 'ko';
}
window.lang = localStorage.getItem('lang');

function App() {
    return (
        <>
            <Nav />
            <Wrapper>
                <Route path="/" component={Main} exact />
            </Wrapper>
            <Footer />
        </>
    );
}

export default App;
