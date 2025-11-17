import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
// eslint-disable-next-line react/display-name
export const SidebarItem = memo((props: SidebarItemProps) => {
    const {item: {Icon, path, text}, collapsed} = props;
    const {t} = useTranslation();
    
    return <AppLink to={path} theme={AppLinkTheme.SECONDARY} className={cls.item}>
        <Icon className={cls.icon}/>
        {!collapsed && <span className={cls.link}>{t(text)}</span>}
    </AppLink>
})