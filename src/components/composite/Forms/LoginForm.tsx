import React,{useState} from 'react';
import Input from '../../common/Inputs/Input';
import Button from '../../common/Buttons/Button';
import './Forms.css';
import { INPUT_PLACEHOLDERS, LOGIN_TEXT } from '../../../constants/index';

const LoginForm: React.FC= () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e:any) => {
        e.preventDefault();
        try{
            // const userData = await login(email, password);
        }
        catch (error) {
            console.error('Login failed:', error);
        }
        console.log('Login attempt with', { email, password });
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
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
            <Button className="button-primary" type="submit">{LOGIN_TEXT}</Button>
        </form>
    );
};

export default LoginForm;
