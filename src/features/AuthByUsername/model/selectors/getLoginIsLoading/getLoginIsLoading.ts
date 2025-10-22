import { StateShema } from "app/providers/StoreProvider";

export const getLoginIsloading = (state: StateShema) => {
    return state?.loginForm?.isLoading || false
}