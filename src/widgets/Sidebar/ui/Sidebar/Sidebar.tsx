import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {FC, useState} from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
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
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <div className={cls.links}>
                    
                <AppLink to={routePath.main} theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    {!collapsed && <span className={cls.link}>{t('Главная страница')}</span>}
                </AppLink>
                <AppLink to={routePath.about} theme={AppLinkTheme.SECONDARY}  className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    {!collapsed && <span className={cls.link}>{t('О сайте')}</span>}
                </AppLink>
            </div>

            <Button 
                data-testid='toggle' 
                onClick={toggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
}