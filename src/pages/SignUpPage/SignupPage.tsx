import React from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import SignupForm from '../../components/composite/Forms/SignupForm';
import { SIGNUP_TEXT } from '../../constants';
import './SignupPage.css';

const SignupPage:React.FC = () => {
    return (
        <AuthTemplate>
            <div className="signup-page">
                <h2>{SIGNUP_TEXT}</h2>
                <SignupForm />
            </div>
        </AuthTemplate>
    );
};

export default SignupPage;
