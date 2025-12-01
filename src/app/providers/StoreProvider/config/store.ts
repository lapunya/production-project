import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateShema } from "./StateShema";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

// удобно объявить именно фукнцию для создания store, чтобы потом ее переиспользовать, например, в тестировании
// плюс есть возможность передавать в нее initialState, опять же для тестов

export function createReduxStore(
    initialState: StateShema, 
    asyncReducers?: ReducersMapObject<StateShema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateShema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__, // отключаем девтулзы в prod режиме
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    // чтобы не импортировать инстанс аксиоса в каждый файл с асинх thunk, 
                    // прописываем его в extraArgument
                    api: $api,
                    // передаем функцию navigate, чтобы была возможность управлять маршрутизацией из асинх thunk
                    navigate
                }
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
// тип диспатча - тип возвращаемого значения из функции createReduxStore, точнее свойство dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];