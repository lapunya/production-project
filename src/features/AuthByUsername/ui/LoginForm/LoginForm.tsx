import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {FC} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm:FC<LoginFormProps> = (props) => {
    const {t} = useTranslation()
    const {className} = props;

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input className={cls.input} label={t('Логин')}/>
            <Input className={cls.input} label={t('Пароль')}/>
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
}