import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.css';

export enum ButtonTheme {
    RED = 'red',
    OUTLINE = 'outline',
    CLEAN = 'clean',
  }
  
export enum ButtonSize {
    M = 'medium',
    L = 'large'
  }
    
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    size?: ButtonSize,
    theme: ButtonTheme,
}
    
export const Button = ({ children, size, theme, ...otherProps}: ButtonProps) => {
    return (
        <button className={`${style.button} ${style[theme]} ${size ? style[size] : ''}`} {...otherProps}>
            {children}
        </button>
    );
};