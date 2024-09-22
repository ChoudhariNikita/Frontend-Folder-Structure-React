import React from 'react';
import './Footer.css';
import { FOOTER_TEXT } from '../../../constants';

const Footer:React.FC= () => {
    return (
        <footer className="footer">
            <p>&copy; {FOOTER_TEXT}</p>
        </footer>
    );
};

export default Footer;


