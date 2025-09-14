import cls from './Button.module.scss';
import type {ButtonHTMLAttributes, FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, 
        children, 
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button 
            className={
                classNames(
                    cls.button, 
                    {[cls.square]: square}, 
                    [className, cls[theme], cls[size]]
                )} 
            {...otherProps}
        >
            {children}
        </button>
    );
}