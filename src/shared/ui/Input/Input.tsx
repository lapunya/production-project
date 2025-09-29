import {classNames} from 'shared/lib/classNames/classNames';
import React, {InputHTMLAttributes, memo} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label: string;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
    const {
        className, 
        value, 
        onChange, 
        type = 'text',
        label,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames('', {}, [className])}>
            <label>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
})