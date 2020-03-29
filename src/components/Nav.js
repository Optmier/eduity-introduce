import React, { useState, useEffect } from 'react';
import '../styles/nav.scss';
import ColorLogo from './svgs/nav_logo_color.png';
import WhiteLogo from './svgs/nav_logo_white.png';
// import { Select, MenuItem, InputBase } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Hambuger from './Hambuger';
import { strings } from '../datas/strings';

const { nav_menus } = strings;

// const LanguageSelect = React.memo(function LanguageSelect() {
//     const [lang, setLang] = React.useState('');
//     const changeLang = e => {
//         setLang(e.target.value);
//         window.lang = e.target.value;
//         localStorage.setItem('lang', e.target.value);
//         document.location.reload();
//     };

//     useEffect(() => {
//         setLang(window.lang);
//     }, []);

//     const MdInputBase = withStyles(theme => ({
//         root: {
//             color: 'inherit',
//             '& .MuiSvgIcon-root': {
//                 color: 'inherit',
//             },
//         },
//     }))(InputBase);

//     const SimpleSelect = withStyles(theme => ({
//         root: {
//             padding: 0,
//             color: 'inherit',
//             fontFamily: lang === 'ko' ? 'Noto Sans KR, sans-serif' : 'Montserrat, sans-serif',
//         },
//     }))(Select);

//     return (
//         <SimpleSelect value={lang} onChange={changeLang} input={<MdInputBase />} displayEmpty>
//             <MenuItem value={'ko'}>한국어</MenuItem>
//             <MenuItem value={'en'}>English</MenuItem>
//         </SimpleSelect>
//     );
// });

const NavMenuItem = React.memo(function NavMenuItem({ linkTo, children }) {
    return (
        <NavLink
            to={linkTo}
            activeStyle={{
                borderBottom: '3px solid #00e099',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                boxSizing: 'border-box',
                paddingTop: '3px',
            }}
        >
            <div className="item">{children}</div>
        </NavLink>
    );
});

function Nav({ optStatic }) {
    const useScroll = () => {
        const [scroll, setScroll] = useState(optStatic ? 'scrolled' : '');
        const onScroll = () => {
            if (window.location.pathname === '/') window.mainScroll = window.scrollY;
            if (window.scrollY > 3 && !scroll) {
                setScroll('scrolled');
            } else if (window.scrollY <= 3 && scroll) {
                if (window.location.pathname === '/') setScroll('');
                else setScroll('scrolled');
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
                <Link to="/">
                    <div className="nav-logo">
                        <img className={`color ${scroll}`} src={ColorLogo} alt="Go to home..." />
                        <img className={`white ${scroll}`} src={WhiteLogo} alt="Go to home..." />
                    </div>
                </Link>
                <div className="nav-menus">
                    <NavMenuItem linkTo="/about">{nav_menus.about[window.lang]}</NavMenuItem>
                    <NavMenuItem linkTo="/tech">{nav_menus.tech[window.lang]}</NavMenuItem>
                    {/* 기술 */}
                    <NavMenuItem linkTo="/product">{nav_menus.product[window.lang]}</NavMenuItem>
                    {/* 제품 */}
                    <NavMenuItem linkTo="/bookonline">{nav_menus.book_online[window.lang]}</NavMenuItem>
                    {/* 상담 예약 */}
                </div>

                <div className="nav-right">
                    {/* <NavMenuItem linkTo="/login">
                        <div className="item login">Log In</div>
                    </NavMenuItem>
                    <div className={`item select-lang ${scroll}`}>
                        <LanguageSelect />
                    </div> */}
                    <div className="nav-hambuger">
                        <Hambuger></Hambuger>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(withRouter(Nav));
