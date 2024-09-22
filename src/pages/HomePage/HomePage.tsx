import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import { WELCOME_TEXT,PARAGRAPH_TEXT } from '../../constants';

const HomePage:React.FC = () => {
    return (
        <MainTemplate>
            <div className="home-page">
                <h2>{WELCOME_TEXT}</h2>
                <p>{PARAGRAPH_TEXT}</p>
            </div>
        </MainTemplate>
    );
};

export default HomePage;
