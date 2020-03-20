import React, { useState, useEffect } from 'react';
import '../styles/nav.scss';
import ColorLogo from './svgs/nav_logo_color.png';
import WhiteLogo from './svgs/nav_logo_white.png';
import { Select, MenuItem, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Hambuger from './Hambuger';

const LanguageSelect = React.memo(function LanguageSelect() {
    const [lang, setLang] = React.useState('');
    const changeLang = e => {
        setLang(e.target.value);
        window.lang = e.target.value;
        localStorage.setItem('lang', e.target.value);
        document.location.reload();
    };

    useEffect(() => {
        setLang(window.lang);
    }, []);

    const MdInputBase = withStyles(theme => ({
        root: {
            color: 'inherit',
            '& .MuiSvgIcon-root': {
                color: 'inherit',
            },
        },
    }))(InputBase);

    const SimpleSelect = withStyles(theme => ({
        root: {
            padding: 0,
            color: 'inherit',
            fontFamily: lang === 'ko' ? 'Noto Sans KR, sans-serif' : 'Montserrat, sans-serif',
        },
    }))(Select);

    return (
        <SimpleSelect value={lang} onChange={changeLang} input={<MdInputBase />} displayEmpty>
            <MenuItem value={'ko'}>한국어</MenuItem>
            <MenuItem value={'en'}>English</MenuItem>
        </SimpleSelect>
    );
});

const NavMenuItem = React.memo(function NavMenuItem({ linkTo, children }) {
    return (
        <div className="item">
            <Link to={linkTo}>{children}</Link>
        </div>
    );
});

function Nav() {
    const useScroll = () => {
        const [scroll, setScroll] = useState('');
        const onScroll = () => {
            if (window.scrollY > 3 && !scroll) {
                setScroll('scrolled');
            } else if (window.scrollY <= 3 && scroll) {
                setScroll('');
            }
        };
        useEffect(() => {
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, [scroll]);
        return scroll;
    };

    const scroll = useScroll();

    return (
        <>
            <div className={`nav-root ${window.lang} ${scroll}`}>
                <div className="nav-logo">
                    <img className={`color ${scroll}`} src={ColorLogo} alt="Go to home..." />
                    <img className={`white ${scroll}`} src={WhiteLogo} alt="Go to home..." />
                </div>
                <div className="nav-menus">
                    <NavMenuItem linkTo="/">Home</NavMenuItem>
                    <NavMenuItem linkTo="/book">Book Online</NavMenuItem>
                    <NavMenuItem linkTo="/newitem">New Item</NavMenuItem>
                    <NavMenuItem linkTo="/about">About</NavMenuItem>
                </div>

                <div className="nav-right">
                    <NavMenuItem linkTo="/login">
                        <div className="item login">Log In</div>
                    </NavMenuItem>
                    <div className={`item select-lang ${scroll}`}>
                        <LanguageSelect />
                    </div>
                    <div className="nav-hambuger">
                        <Hambuger></Hambuger>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(Nav);
