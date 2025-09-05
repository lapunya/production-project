import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import {FC} from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
 className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = (props) => {
    const {t} = useTranslation();
    const {className} = props;

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
}