import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {memo, useState} from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { sidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
 className?: string;
}

// eslint-disable-next-line react/display-name
export const Sidebar = memo((props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
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
                {sidebarItemsList.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed}/>)}
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
})