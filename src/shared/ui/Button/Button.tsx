import cls from './Button.module.scss';
import {memo, ReactNode, type ButtonHTMLAttributes, type FC} from 'react';
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
    disabled?: boolean;
    children?: ReactNode;
}

// eslint-disable-next-line react/display-name
export const Button = memo((props: ButtonProps) => {
    const {
        className, 
        children, 
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    return (
        <button 
            className={
                classNames(
                    cls.button, 
                    {
                        [cls.square]: square,
                        [cls.disabled]: disabled,
                    }, 
                    [className, cls[theme], cls[size]]
                )} 
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
})