import { StateShema } from "app/providers/StoreProvider"

export const getUserAuthData = (state: StateShema) => {
    return state.user.authData
}