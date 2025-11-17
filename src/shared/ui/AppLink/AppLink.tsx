import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss';
import { FC, memo, ReactNode } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

// eslint-disable-next-line react/display-name
export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, 
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link 
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
})