import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';
import {FC} from 'react';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
 className?: string;
}

export const ErrorPage:FC<ErrorPageProps> = (props) => {
    const {t} = useTranslation();
    const {className} = props;

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button onClick={reloadPage}>{t('Обновить страницу')}</button>
        </div>
    );
}