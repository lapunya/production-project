import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../../../entities/User';

interface NavbarProps {
    className?: string
}

// eslint-disable-next-line react/display-name
export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const [isAuthModal, setIsAuthModal] = useState(false);


    // при изменении пропса компонет перерисовывается, поэтому функцию оборачиваем в useCallback, чтобы ссылка на
    // функцию не менялась пока не меняется массив зависимостей
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [setIsAuthModal]);

    const onLogout = useCallback(() => {
        setIsAuthModal(false);
        dispatch(userActions.logout());
    }, [dispatch])

    if(authData) {
        return <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.BACKGROUND} 
                className={cls.links}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </div>
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.BACKGROUND} 
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </div>
    )
})