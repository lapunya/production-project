import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateShema } from "./StateShema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

// удобно объявить именно фукнцию для создания store, чтобы потом ее переиспользовать, например, в тестировании
// плюс есть возможность передавать в нее initialState, опять же для тестов

export function createReduxStore(initialState: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer
    }
    return configureStore<StateShema>({
        reducer: rootReducers,
        devTools: __IS_DEV__, // отключаем девтулзы в prod режиме
        preloadedState: initialState
    })
}