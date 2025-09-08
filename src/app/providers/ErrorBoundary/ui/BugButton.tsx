import {classNames} from 'shared/lib/classNames/classNames';
import {FC, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
 className?: string;
}

export const BugButton:FC<BugButtonProps> = (props) => {
    const {t} = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {
        if(error) {
            throw new Error();
        }
    }, [error])

    const {className} = props;

    return (
        <Button 
            className={classNames('', {}, [className])}
            onClick={onThrow}
        >
            {t('Вызвать ошибку')}
        </Button>
    );
}