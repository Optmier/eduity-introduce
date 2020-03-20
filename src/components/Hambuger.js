import React, { useState } from 'react';
import '../styles/hamburger.scss';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const NavMenuItem = React.memo(function NavMenuItem({ linkTo, children }) {
    return (
        <div className="item">
            <Link to={linkTo}>{children}</Link>
        </div>
    );
});

function Hambuger() {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={classNames(classes.list, window.lang)}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div className="hambuger-list">
                <List>
                    <ListItem>
                        <div className="list-header">
                            Login is <br></br>required :(
                        </div>
                    </ListItem>
                    <ListItem>
                        <NavMenuItem linkTo="/login">
                            <span className="list-login">Login</span>
                        </NavMenuItem>
                    </ListItem>
                </List>
                <div className="divider"></div>
                <List>
                    <NavMenuItem linkTo="/">
                        <ListItem button>
                            <span className="list-text">Home</span>
                        </ListItem>
                    </NavMenuItem>
                    <NavMenuItem linkTo="/book">
                        <ListItem button>
                            <span className="list-text">Book Online</span>
                        </ListItem>
                    </NavMenuItem>
                    <NavMenuItem linkTo="/newitem">
                        <ListItem button>
                            <span className="list-text">New Item</span>
                        </ListItem>
                    </NavMenuItem>
                    <NavMenuItem linkTo="/about">
                        <ListItem button>
                            <span className="list-text">About</span>
                        </ListItem>
                    </NavMenuItem>
                </List>
            </div>
        </div>
    );

    return (
        <>
            <MdMenu size={30} onClick={toggleDrawer('right', true)}></MdMenu>

            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </>
    );
}

export default React.memo(Hambuger);
