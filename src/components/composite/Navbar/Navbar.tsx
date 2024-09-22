import React from "react";
import NavLink from "../../common/Links/Navlinks/NavLink";
import Text from "../../common/Texts/Text";
import { APP_TITLE } from "../../../constants";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Text level={1} className="navbar-title">{APP_TITLE}</Text>
            </div>
            <div className="navbar-right">
                <NavLink />
            </div>
        </nav>
    );
};

export default Navbar;
