import React from 'react';
import Header from '../../layout/Header/Header';
import './AuthTemplate.css';
import Footer from '../../layout/Footer/Footer';
import {AuthTemplateProps} from '../../../types/interfaces/index';

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
    return (
        <div className="auth-template">
            <Header />
            <main className="auth-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AuthTemplate;
