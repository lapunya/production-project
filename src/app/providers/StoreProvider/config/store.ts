import { configureStore } from "@reduxjs/toolkit";
import { StateShema } from "./StateShema";
import { counterReducer } from "entities/Counter";

// удобно объявить именно фукнцию для создания store, чтобы потом ее переиспользовать, например, в тестировании
// плюс есть возможность передавать в нее initialState, опять же для тестов

export function createReduxStore(initialState: StateShema) {
    return configureStore<StateShema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__, // отключаем девтулзы в prod режиме
        preloadedState: initialState
    })
}