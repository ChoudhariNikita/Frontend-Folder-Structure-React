import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './MainTemplate.css';
import {MainTemplateProps} from '../../../types/interfaces/index';

const MainTemplate:React.FC<MainTemplateProps>= ({ children }) => {
    return (
        <div className="main-template">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainTemplate;
