import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {memo, useCallback} from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo((props: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password]);

    const {className} = props;

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text
                theme={TextTheme.ERROR}
                text={error}
            />}
            <Input 
                className={cls.input} 
                label={t('Логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input className={cls.input} 
                label={t('Пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
})