import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterShema } from "../../../../entities/Counter";
import { UserShema } from "../../../../entities/User";
import { LoginShema } from "features/AuthByUsername";

export interface StateShema {
    counter: CounterShema;
    user: UserShema;

    // Async reducers:
    loginForm?: LoginShema;
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