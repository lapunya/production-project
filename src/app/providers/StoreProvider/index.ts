import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type {StateShema, ReduxStoreWithManager, ThunkConfig} from './config/StateShema';
export {
    StoreProvider,
    createReduxStore,
    StateShema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig
}