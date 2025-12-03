import {ReactNode} from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateShema } from '../config/StateShema';
import {ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateShema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {children, initialState, asyncReducers} = props;

    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateShema,
        asyncReducers as ReducersMapObject<StateShema>,
        navigate
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}