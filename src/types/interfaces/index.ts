export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export interface TextProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;  // Restrict level to valid h1-h6 values
    children: React.ReactNode;
    className?: string;
}


export interface AuthTemplateProps{
    children:React.ReactNode;
}

export interface MainTemplateProps{
    children:React.ReactNode;
}


export interface LoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
    };
}

export interface SignupResponse {
    message: string; 
    user?: {
        id: string;
        email: string;
    };
}