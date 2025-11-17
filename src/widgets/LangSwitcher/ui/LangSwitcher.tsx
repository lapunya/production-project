import {classNames} from 'shared/lib/classNames/classNames';
import {memo} from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

// eslint-disable-next-line react/display-name
export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    const toggle = async() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    const {className} = props;
    
    return (
        <Button 
            className={classNames('', {}, [className])} 
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
        >
            {t(props?.short ? 'Язык сокращенный' : 'Язык')}
        </Button>
    );
})