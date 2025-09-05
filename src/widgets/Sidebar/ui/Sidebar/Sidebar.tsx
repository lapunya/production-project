import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {FC, useState} from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
 className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const {className} = props;
    const toggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggle}>{t('Свернуть')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
}