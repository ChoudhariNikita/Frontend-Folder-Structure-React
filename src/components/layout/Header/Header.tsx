import React from 'react';
import NavLink from "../../common/Links/Navlinks/NavLink";
import { APP_TITLE } from '../../../constants';
import './Header.css';

const Header:React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="site-title">{APP_TITLE}</h1>
            </div>
            <div className="header-right">
                <NavLink />
            </div>
        </header>
    );
};

export default Header;
