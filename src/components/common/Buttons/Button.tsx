import {ButtonProps} from "../../../types/interfaces/index";

import './Button.css';

const Button:React.FC<ButtonProps>=({
    children,
    onClick,
    className,
    type
})=>{
    return (
        <button onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
}


export default Button;