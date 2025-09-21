import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

export const Modal:FC<ModalProps> = (props) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const {className, children, isOpen, onClose} = props;
    const {theme} = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    }

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300)
        }
    }, [onClose, ])
    // на каждый перерендер компонента эти функции создаются заново и у каждой из этих функций новая ссылка
    // поэтому лучше обернуть это в useCallback, тогда ссылка сохранится, если в массиве зависимостей нет изменений
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }


        // все таймауты, таймеры и любые асинхронные операции внутри компонента желательно очищать
        // поэтому положили setTimeout внутрь useRef, чтобы была возможность очистить его в useEffect
        // из useEffect можно вернуть функцию, которая отработает при демонтировании компонента
        return () => {
            clearTimeout(timeRef.current);
            removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}