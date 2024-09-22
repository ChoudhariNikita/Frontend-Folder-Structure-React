import React from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import LoginForm from '../../components/composite/Forms/LoginForm';
import { LOGIN_TEXT } from '../../constants';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    return (
        <AuthTemplate>
            <div className="login-page">
                <h2>{LOGIN_TEXT}</h2>
                <LoginForm />
            </div>
        </AuthTemplate>
    );
};

export default LoginPage;
