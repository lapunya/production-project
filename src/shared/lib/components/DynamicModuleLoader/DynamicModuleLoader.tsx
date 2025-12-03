import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateShemaKey } from "app/providers/StoreProvider/config/StateShema";
import { ReactNode, useEffect } from "react"
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
    [name in StateShemaKey]?: Reducer
}

type ReducersListEntry = [StateShemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children?: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {children, reducers, removeAfterUnmount} = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    
    useEffect(() => {
        // в момент монтирования компонента добавляем асинхронный reducer в стор
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateShemaKey, reducer)
            dispatch({type: 'MOUNT'})
        })
        // в момент демонтирования компонента удаляем асинхронный reducer в стор
        if(removeAfterUnmount) {
            return () => {
                Object.keys(reducers).forEach((name) => {
                    store.reducerManager.remove(name as StateShemaKey);
                    dispatch({type: 'UNMOUNT'})
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
        {children}
    </>
}