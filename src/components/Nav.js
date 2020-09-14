import React, { useState, useEffect, useRef } from 'react';
import '../styles/nav.scss';
import ColorLogo from '../images/nav_logo_color.svg';
// import { Select, MenuItem, InputBase } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Link as AnimScrollTo } from 'react-scroll';
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
//             fontFamily: "'Montserrat', 'Noto Sans KR'",
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

function Nav({ optStatic, history }) {
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

        useEffect(() => {
            setScroll('');
        }, [window.location.pathname]);
        return scroll;
    };

    const scroll = useScroll();

    return (
        <>
            <div className={`nav-root ${scroll}`}>
                <div className="nav-wrapper">
                    <Link
                        to="/"
                        onClick={() => {
                            document.getElementsByClassName('scroll-to-top')[0].click();
                        }}
                    >
                        <div className="nav-logo">
                            <img className="color" src={ColorLogo} alt="Go to home..." />
                        </div>
                    </Link>
                    <AnimScrollTo
                        to="/"
                        className="scroll-to-top"
                        to="main_top_start"
                        spy={true}
                        smooth={true}
                        duration={700}
                    ></AnimScrollTo>
                    <div className="nav-menus">
                        <NavMenuItem linkTo="/service">서비스 소개</NavMenuItem>
                        <NavMenuItem linkTo="/customer-service/faq">고객센터</NavMenuItem>
                        {/* <NavMenuItem linkTo="/bookonline">Pierce 상담신청</NavMenuItem> */}
                    </div>

                    <div className="nav-right">
                        {/* <NavMenuItem linkTo="/login">
                        <div className="item login">Log In</div>
                    </NavMenuItem>
                    <div className={`item select-lang ${scroll}`}>
                        <LanguageSelect />
                    </div> */}
                        <button
                            type="button"
                            className="normal login"
                            onClick={() => {
                                history.push('/bookonline');
                            }}
                        >
                            무료체험하기
                        </button>
                        <div className="nav-hambuger">
                            <Hambuger></Hambuger>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(withRouter(Nav));
