import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterShema } from "../../../../entities/Counter";
import { UserShema } from "../../../../entities/User";
import { LoginShema } from "features/AuthByUsername";
import { ProfileShema } from "../../../../entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";

export interface StateShema {
    counter: CounterShema;
    user: UserShema;

    // Async reducers:
    loginForm?: LoginShema;
    profile?: ProfileShema;
}

export type StateShemaKey = keyof StateShema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove: (key: StateShemaKey) => void
}

// EnhancedStore тип, который возвращается после создания стора
export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T; 
    extra: ThunkExtraArg;
}