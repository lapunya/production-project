import cls from './Button.module.scss';
import type {ButtonHTMLAttributes, FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
 const {
        className, 
        children, 
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props;

 return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </button>
 );
}