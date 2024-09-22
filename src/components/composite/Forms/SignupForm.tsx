import React, { useState } from 'react';
import Input from '../../common/Inputs/Input';
import Button from '../../common/Buttons/Button';
import './Forms.css';
import { INPUT_PLACEHOLDERS, SIGNUP_TEXT} from '../../../constants';
// import { signup } from '../../../services/AuthService/handleSignup';

const SignupForm:React.FC= () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignup= (e:any) => {
        e.preventDefault();
        try{
            // const userData = await signup(email, password);
        }
        catch (error) {
            console.error('Signup failed:', error);
        }
        console.log('Signup attempt with', { email, password });
    };

    

    return (
        <form onSubmit={handleSignup} className="signup-form">
            <Input
                type="email"
                placeholder={INPUT_PLACEHOLDERS.EMAIL}
                value={email}
                onChange={(e:any) => setEmail(e.target.value)}
                className="input-field"
            />
            <Input
                type="password"
                placeholder={INPUT_PLACEHOLDERS.PASSWORD}
                value={password}
                onChange={(e:any) => setPassword(e.target.value)}
                className="input-field"
            />
            <Button className="button-primary" type="submit">{SIGNUP_TEXT}</Button>
        </form>
    );
};

export default SignupForm;
